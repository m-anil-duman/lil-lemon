"use client";

import React, { useState,useEffect } from "react";
import { Form, Input, Button, Card, message } from "antd";
import Link from "next/link";
import "./login.css";
import Loading from "../reservation/loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [timerActive, setTimerActive] = useState(true); // Control for loading UI

  useEffect(() => {
      const timer = setTimeout(() => {
        setTimerActive(false);
      }, 500); 
      return () => clearTimeout(timer);
    }, []);
  
  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Login successful!");
      console.log("Received values: ", values);
    }, 1500); // Simulate API call
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Failed to login. Please check the fields.");
    console.error("Failed:", errorInfo);
  };

  return ( timerActive ? <Loading page={"login"} /> : 
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Login</h2>
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="login-footer">
          <Link href="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          <Link href="/register" className="register-link">
            Create an Account
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
