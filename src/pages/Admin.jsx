import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, DollarSign, Package, Plus, Edit, Trash2, Search } from 'lucide-react';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products');
  
  const mockProducts = [
    { id: 1, name: 'Triba Elixir', price: '$120.00', category: 'COSMETIC', stock: 45 },
    { id: 2, name: 'Silk Wrap Dress', price: '$240.00', category: 'FASHION', stock: 12 },
    { id: 3, name: 'Essence Rose', price: '$85.00', category: 'COSMETIC', stock: 30 },
  ];

  const mockOrders = [
    { id: '#1234', customer: 'Sarah Parker', date: '2026-03-18', total: '$360.00', status: 'Delivered' },
    { id: '#1235', customer: 'Emma Watson', date: '2026-03-19', total: '$120.00', status: 'Processing' },
  ];

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>TRIBA<span>ADMIN</span></h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
            className={activeTab === 'products' ? 'active' : ''} 
            onClick={() => setActiveTab('products')}
          >
            <ShoppingBag size={20} /> Manage Products
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >
            <Package size={20} /> Orders
          </button>
          <button 
            className={activeTab === 'prices' ? 'active' : ''} 
            onClick={() => setActiveTab('prices')}
          >
            <DollarSign size={20} /> Price Management
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="content-hdr">
          <div className="hdr-search">
            <Search size={18} />
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="user-profile">
            <span>Admin User</span>
            <div className="avatar">A</div>
          </div>
        </header>

        <section className="dashboard-view">
          {activeTab === 'products' && (
            <div className="products-manager">
              <div className="view-header">
                <h3>Product List</h3>
                <button className="btn-primary">
                  <Plus size={18} /> ADD NEW PRODUCT
                </button>
              </div>
              
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProducts.map(p => (
                    <tr key={p.id}>
                      <td className="p-name">{p.name}</td>
                      <td>{p.category}</td>
                      <td className="p-price">{p.price}</td>
                      <td>{p.stock}</td>
                      <td className="actions">
                        <button className="edit-btn"><Edit size={16} /></button>
                        <button className="delete-btn"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="orders-manager">
              <div className="view-header">
                <h3>Customer Orders</h3>
              </div>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map(o => (
                    <tr key={o.id}>
                      <td className="o-id">{o.id}</td>
                      <td>{o.customer}</td>
                      <td>{o.date}</td>
                      <td>{o.total}</td>
                      <td><span className={`status ${o.status.toLowerCase()}`}>{o.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'dashboard' && (
            <div className="stats-grid">
               <div className="stat-card">
                  <h4>Total Sales</h4>
                  <p>$45,230</p>
               </div>
               <div className="stat-card">
                  <h4>Total Orders</h4>
                  <p>156</p>
               </div>
               <div className="stat-card">
                  <h4>New Customers</h4>
                  <p>24</p>
               </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Admin;
