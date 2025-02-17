import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Patients',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Appointments',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Reports'
      }
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Dashboard</h1>
      
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Patients</Card.Title>
              <Card.Text className="h2">1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Upcoming Appointments</Card.Title>
              <Card.Text className="h2">42</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Pending Prescriptions</Card.Title>
              <Card.Text className="h2">18</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Line data={chartData} options={chartOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="mb-3">Quick Actions</h2>
          <Button variant="primary" className="me-2">Add New Patient</Button>
          <Button variant="secondary">Schedule Appointment</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
