"use client";

import React, { useState, useEffect } from "react";
import { Form, Button, DatePicker, Select, InputNumber, Card, Modal } from "antd";
import moment from "moment";
import "./reservation.css";
import { fetchAPI, submitAPI } from "../../components/hooks/utils";
import CustomTimePicker from "@/components/CustomTimePicker/CustomTimePicker";
import Loading from "./loading";

const { Option } = Select;

const Reservation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [reservedTimes, setReservedTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timerActive, setTimerActive] = useState(true); // Control for loading UI
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerActive(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Fetch reserved times when a date is selected
  useEffect(() => {
    if (selectedDate) {
      fetchReservedTimes(selectedDate);
    }
  }, [selectedDate]);

  const fetchReservedTimes = async (date) => {
    setLoader(true);
    const reserved = await fetchAPI(date);
    setReservedTimes(reserved);
    setLoader(false);
  };

  const onFinish = async (values) => {
    setLoader(true);
    const newReservation = {
      date: values.date.format("YYYY-MM-DD"),
      time: moment(values.time, "HH:mm").format("HH:mm"),
      guests: values.guests,
      occasion: values.occasion,
    };

    await submitAPI(newReservation);

    setTimeout(() => {
      setLoader(false);
      setModalMessage("Your reservation has been successfully made!");
      setModalVisible(true);
      fetchReservedTimes(newReservation.date);
    }, 1000);
  };

  const handleModalOk = () => {
    setModalVisible(false);
  };

  return timerActive ? (
    <Loading />
  ) : (
    <div className="reservation-container">
      <Card className="reservation-card">
        <h2 className="reservation-title">Make a Reservation</h2>
        <Form
          name="reservation"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="date"
            label={<span className="form-label">Appointment Date</span>}
            rules={[{ required: true, message: "Please select your appointment date!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date) => setSelectedDate(date)}
            />
          </Form.Item>
          <Form.Item
            name="time"
            label={<span className="form-label">Appointment Time</span>}
            rules={[{ required: true, message: "Please select your appointment time!" }]}
          >
            <CustomTimePicker
              startTime="09:00"
              endTime="23:00"
              reservedTimes={reservedTimes}
            />
          </Form.Item>
          <Form.Item
            name="guests"
            label={<span className="form-label">Number of Guests</span>}
            rules={[{ required: true, message: "Please input the number of guests!" }]}
          >
            <InputNumber min={1} max={20} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="occasion"
            label={<span className="form-label">Occasion</span>}
            rules={[{ required: true, message: "Please select the occasion!" }]}
          >
            <Select placeholder="Select an occasion">
              <Option value="birthday">Birthday</Option>
              <Option value="anniversary">Anniversary</Option>
              <Option value="business">Business Meeting</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="reservation-form-button"
              loading={loader}
            >
              Make Your Reservation
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Modal
        title="Reservation Status"
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        centered
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default Reservation;
