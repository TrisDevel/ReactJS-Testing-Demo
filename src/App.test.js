// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.clearAllMocks(); // Xóa tất cả các mock trước mỗi test
  window.alert = jest.fn(); // Mock hàm alert
});

describe('App Component', () => {
  test('renders the main title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Information CI\/CD Testing/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);
    const blogLink = screen.getByText("Information");
    const bmiLink = screen.getByText(/BMI Calculator/i);
    
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(bmiLink).toBeInTheDocument();
  });

  test('navigates to About page', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/About/i));
    const aboutText = screen.getByText(/Bùi Trọng Trí/i);
    expect(aboutText).toBeInTheDocument();
  });

  test('navigates to Contact page', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Contact/i));
    const nameLabel = screen.getByLabelText(/Name:/i);
    expect(nameLabel).toBeInTheDocument();
  });

  test('submits the contact form', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Contact/i));
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'Hello!' } });
    fireEvent.click(screen.getByText(/Submit/i));
    // Add assertion for form submission if needed
  });



  test('renders BMI Calculator', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Calculator/i));
    const bmiTitle = screen.getByText(/BMI Calculator/i);
    expect(bmiTitle).toBeInTheDocument();
  });

  test('calculates BMI correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/BMI Calculator/i)); // Nhấp vào liên kết "BMI Calculator"
    
    // Nhập trọng lượng và chiều cao
    fireEvent.change(screen.getByPlaceholderText(/Weight \(kg\)/i), { target: { value: '70' } });
    fireEvent.change(screen.getByPlaceholderText(/Height \(cm\)/i), { target: { value: '175' } });
    
    fireEvent.click(screen.getByText(/Calculate/i)); // Nhấp vào nút "Calculate"
    
    const bmiResult = screen.getByText(/Your BMI is:/i);
    expect(bmiResult).toBeInTheDocument();
  });

  test('shows error alert when weight or height is missing', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/BMI Calculator/i)); // Nhấp vào liên kết "BMI Calculator"
    fireEvent.click(screen.getByText(/Calculate/i)); // Nhấp vào nút "Calculate"
    
    // Kiểm tra xem alert có được gọi không
    expect(window.alert).toHaveBeenCalledWith('Please enter both weight and height');
  });
});