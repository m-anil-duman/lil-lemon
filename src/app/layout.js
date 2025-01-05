// src/app/layout.js
 
import './globals.css'; 
import './reservation/reservation.css'; 
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';


export const metadata = {
  title: 'The Little Lemon Restaurant',
  description: 'Mediterranean dining experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#495E57',
              colorBorder: '#F4CE14',
            },
          }}
        >
          <div className="content-wrapper">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
