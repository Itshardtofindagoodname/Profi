import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

const markdown = `## Tech Stack

- Frontend: React Native
- Backend: Node.js, Express.js
- Database: MongoDB
- Payment Gateway: Stripe

## Color Palettes

- **Primary:** #FF5A5F
- **Secondary:** #F0F0F0
- **Accent:** #242424
- **Neutral:** #FFFFFF, #888888

## To-Do Items

- [ ] Implement user authentication and authorization
- [ ] Allow users to search for restaurants and dishes
- [ ] Enable users to place orders and track their delivery status
- [ ] Integrate payment gateway functionality
- [ ] Implement GPS tracking for delivery drivers
- [ ] Create a customer dashboard with order history and tracking
- [ ] Integrate with third-party services for food delivery and payment processing
- [ ] Design a user-friendly and intuitive interface
- [ ] Ensure scalability and performance for high traffic volumes
- [ ] Implement push notifications for order updates and promotions

## Project Features

- **User-Friendly Interface:** Easy-to-use app with intuitive navigation.
- **Extensive Restaurant Directory:** Wide selection of restaurants and cuisines to choose from.
- **Real-Time Order Tracking:** Live updates on order progress and estimated delivery time.
- **Secure Payment Processing:** Safe and seamless payment transactions through integrated payment gateway.
- **Personalized Recommendations:** Tailored suggestions based on user preferences and past orders.
- **Loyalty Program:** Rewards system to encourage repeat orders.
- **Integration with Third-Party Services:** Compatibility with food delivery and payment processing partners.
- **Driver Management:** System for managing delivery drivers and optimizing delivery routes.
- **Data Analytics:** Comprehensive insights into app usage, order patterns, and customer feedback.`
function Mark() {
  return (
    <>
    <Markdown>{markdown}</Markdown>
    </>
  )
}

export default Mark