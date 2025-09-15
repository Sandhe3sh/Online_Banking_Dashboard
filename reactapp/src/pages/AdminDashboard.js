// import React, { useState, useEffect } from 'react';

// function AdminDashboard() {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [weatherData, setWeatherData] = useState({
//     temperature: '24°C',
//     condition: 'Sunny',
//     humidity: '65%',
//     windSpeed: '12 km/h'
//   });
  
//   const [alerts] = useState([
//     { id: 1, type: 'warning', message: 'Solar panel efficiency decreased by 5%', time: '2 hours ago' },
//     { id: 2, type: 'info', message: 'System maintenance scheduled for tomorrow', time: '4 hours ago' },
//     { id: 3, type: 'success', message: 'Energy savings target achieved', time: '1 day ago' }
//   ]);

//   const [systemItems] = useState([
//     {
//       id: 'solar',
//       name: 'Solar Panels',
//       icon: '☀️',
//       status: 'Active',
//       details: {
//         efficiency: '92%',
//         powerOutput: '4.2 kW',
//         dailyGeneration: '28.5 kWh',
//         monthlyGeneration: '850 kWh',
//         carbonSaved: '425 kg CO2',
//         panels: [
//           { id: 1, location: 'Roof Section A', output: '1.2 kW', efficiency: '94%' },
//           { id: 2, location: 'Roof Section B', output: '1.5 kW', efficiency: '91%' },
//           { id: 3, location: 'Roof Section C', output: '1.5 kW', efficiency: '92%' }
//         ]
//       }
//     },
//     {
//       id: 'battery',
//       name: 'Battery Storage',
//       icon: '🔋',
//       status: 'Charging',
//       details: {
//         capacity: '85%',
//         voltage: '48.2V',
//         current: '12.5A',
//         temperature: '32°C',
//         cycleCount: '1,247',
//         estimatedLife: '8.2 years remaining'
//       }
//     },
//     {
//       id: 'inverter',
//       name: 'Power Inverter',
//       icon: '⚡',
//       status: 'Online',
//       details: {
//         efficiency: '96.8%',
//         inputVoltage: '48V DC',
//         outputVoltage: '230V AC',
//         frequency: '50 Hz',
//         temperature: '45°C',
//         totalHours: '12,450 hrs'
//       }
//     }
//   ]);

//   const getAlertIcon = (type) => {
//     switch(type) {
//       case 'warning': return '⚠️';
//       case 'info': return 'ℹ️';
//       case 'success': return '✅';
//       default: return 'ℹ️';
//     }
//   };

//   const getAlertColor = (type) => {
//     switch(type) {
//       case 'warning': return '#f59e0b';
//       case 'info': return '#3b82f6';
//       case 'success': return '#10b981';
//       default: return '#6b7280';
//     }
//   };

//   const renderHomeView = () => (
//     <div style={styles.homeContainer}>
//       {/* Weather Section */}
//       <div style={styles.weatherCard}>
//         <div style={styles.weatherHeader}>
//           <h2 style={styles.sectionTitle}>
//             <span style={styles.weatherIcon}>🌤️</span>
//             Weather Conditions
//           </h2>
//         </div>
//         <div style={styles.weatherContent}>
//           <div style={styles.weatherMain}>
//             <div style={styles.temperature}>{weatherData.temperature}</div>
//             <div style={styles.condition}>{weatherData.condition}</div>
//           </div>
//           <div style={styles.weatherDetails}>
//             <div style={styles.weatherItem}>
//               <span style={styles.weatherLabel}>Humidity</span>
//               <span style={styles.weatherValue}>{weatherData.humidity}</span>
//             </div>
//             <div style={styles.weatherItem}>
//               <span style={styles.weatherLabel}>Wind Speed</span>
//               <span style={styles.weatherValue}>{weatherData.windSpeed}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Alerts Section */}
//       <div style={styles.alertsCard}>
//         <h2 style={styles.sectionTitle}>
//           <span style={styles.alertIcon}>🔔</span>
//           System Alerts
//         </h2>
//         <div style={styles.alertsList}>
//           {alerts.map(alert => (
//             <div key={alert.id} style={styles.alertItem}>
//               <div style={styles.alertContent}>
//                 <span style={{...styles.alertTypeIcon, color: getAlertColor(alert.type)}}>
//                   {getAlertIcon(alert.type)}
//                 </span>
//                 <div style={styles.alertText}>
//                   <div style={styles.alertMessage}>{alert.message}</div>
//                   <div style={styles.alertTime}>{alert.time}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* System Items Grid */}
//       <div style={styles.systemGrid}>
//         <h2 style={styles.sectionTitle}>
//           <span style={styles.systemIcon}>⚙️</span>
//           System Components
//         </h2>
//         <div style={styles.itemsGrid}>
//           {systemItems.map(item => (
//             <div
//               key={item.id}
//               style={styles.systemItem}
//               onClick={() => setSelectedItem(item)}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-4px)';
//                 e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
//               }}
//             >
//               <div style={styles.itemIcon}>{item.icon}</div>
//               <div style={styles.itemName}>{item.name}</div>
//               <div style={styles.itemStatus}>
//                 <div style={styles.statusDot}></div>
//                 {item.status}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderDetailView = () => {
//     const item = selectedItem;
    
//     return (
//       <div style={styles.detailContainer}>
//         <div style={styles.detailHeader}>
//           <button 
//             style={styles.backButton}
//             onClick={() => setSelectedItem(null)}
//           >
//             ← Back to Dashboard
//           </button>
//           <h1 style={styles.detailTitle}>
//             <span style={styles.detailIcon}>{item.icon}</span>
//             {item.name} Details
//           </h1>
//         </div>

//         <div style={styles.detailContent}>
//           {item.id === 'solar' && (
//             <>
//               <div style={styles.metricsGrid}>
//                 <div style={styles.metricCard}>
//                   <div style={styles.metricValue}>{item.details.efficiency}</div>
//                   <div style={styles.metricLabel}>Efficiency</div>
//                 </div>
//                 <div style={styles.metricCard}>
//                   <div style={styles.metricValue}>{item.details.powerOutput}</div>
//                   <div style={styles.metricLabel}>Current Output</div>
//                 </div>
//                 <div style={styles.metricCard}>
//                   <div style={styles.metricValue}>{item.details.dailyGeneration}</div>
//                   <div style={styles.metricLabel}>Daily Generation</div>
//                 </div>
//                 <div style={styles.metricCard}>
//                   <div style={styles.metricValue}>{item.details.monthlyGeneration}</div>
//                   <div style={styles.metricLabel}>Monthly Generation</div>
//                 </div>
//               </div>

//               <div style={styles.panelsSection}>
//                 <h3 style={styles.subsectionTitle}>Individual Panel Status</h3>
//                 <div style={styles.panelsList}>
//                   {item.details.panels.map(panel => (
//                     <div key={panel.id} style={styles.panelItem}>
//                       <div style={styles.panelInfo}>
//                         <div style={styles.panelLocation}>{panel.location}</div>
//                         <div style={styles.panelStats}>
//                           <span>Output: {panel.output}</span>
//                           <span>Efficiency: {panel.efficiency}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </>
//           )}

//           {item.id === 'battery' && (
//             <div style={styles.metricsGrid}>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.capacity}</div>
//                 <div style={styles.metricLabel}>Capacity</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.voltage}</div>
//                 <div style={styles.metricLabel}>Voltage</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.current}</div>
//                 <div style={styles.metricLabel}>Current</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.temperature}</div>
//                 <div style={styles.metricLabel}>Temperature</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.cycleCount}</div>
//                 <div style={styles.metricLabel}>Cycle Count</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.estimatedLife}</div>
//                 <div style={styles.metricLabel}>Estimated Life</div>
//               </div>
//             </div>
//           )}

//           {item.id === 'inverter' && (
//             <div style={styles.metricsGrid}>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.efficiency}</div>
//                 <div style={styles.metricLabel}>Efficiency</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.inputVoltage}</div>
//                 <div style={styles.metricLabel}>Input Voltage</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.outputVoltage}</div>
//                 <div style={styles.metricLabel}>Output Voltage</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.frequency}</div>
//                 <div style={styles.metricLabel}>Frequency</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.temperature}</div>
//                 <div style={styles.metricLabel}>Temperature</div>
//               </div>
//               <div style={styles.metricCard}>
//                 <div style={styles.metricValue}>{item.details.totalHours}</div>
//                 <div style={styles.metricLabel}>Total Hours</div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       {selectedItem ? renderDetailView() : renderHomeView()}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },

//   // Home View Styles
//   homeContainer: {
//     display: 'grid',
//     gap: '24px',
//   },

//   weatherCard: {
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     borderRadius: '16px',
//     padding: '24px',
//     color: 'white',
//     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
//   },

//   weatherHeader: {
//     marginBottom: '20px',
//   },

//   sectionTitle: {
//     fontSize: '1.5rem',
//     fontWeight: '700',
//     margin: '0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },

//   weatherIcon: {
//     fontSize: '1.8rem',
//   },

//   weatherContent: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '24px',
//     alignItems: 'center',
//   },

//   weatherMain: {
//     textAlign: 'center',
//   },

//   temperature: {
//     fontSize: '3rem',
//     fontWeight: '800',
//     marginBottom: '8px',
//   },

//   condition: {
//     fontSize: '1.2rem',
//     opacity: '0.9',
//   },

//   weatherDetails: {
//     display: 'grid',
//     gap: '12px',
//   },

//   weatherItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '8px 0',
//   },

//   weatherLabel: {
//     opacity: '0.8',
//   },

//   weatherValue: {
//     fontWeight: '600',
//   },

//   // Alerts Styles
//   alertsCard: {
//     background: 'white',
//     borderRadius: '16px',
//     padding: '24px',
//     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//   },

//   alertIcon: {
//     fontSize: '1.5rem',
//   },

//   alertsList: {
//     display: 'grid',
//     gap: '12px',
//     marginTop: '20px',
//   },

//   alertItem: {
//     padding: '16px',
//     background: '#f8fafc',
//     borderRadius: '12px',
//     border: '1px solid #e2e8f0',
//   },

//   alertContent: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },

//   alertTypeIcon: {
//     fontSize: '1.2rem',
//   },

//   alertText: {
//     flex: '1',
//   },

//   alertMessage: {
//     fontWeight: '500',
//     marginBottom: '4px',
//   },

//   alertTime: {
//     fontSize: '0.9rem',
//     color: '#6b7280',
//   },

//   // System Grid Styles
//   systemGrid: {
//     background: 'white',
//     borderRadius: '16px',
//     padding: '24px',
//     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//   },

//   systemIcon: {
//     fontSize: '1.5rem',
//   },

//   itemsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gap: '20px',
//     marginTop: '20px',
//   },

//   systemItem: {
//     background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//     borderRadius: '12px',
//     padding: '20px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//     border: '1px solid #e2e8f0',
//   },

//   itemIcon: {
//     fontSize: '2.5rem',
//     marginBottom: '12px',
//   },

//   itemName: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     marginBottom: '8px',
//     color: '#1f2937',
//   },

//   itemStatus: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '6px',
//     fontSize: '0.9rem',
//     color: '#059669',
//     fontWeight: '500',
//   },

//   statusDot: {
//     width: '8px',
//     height: '8px',
//     borderRadius: '50%',
//     background: '#059669',
//   },

//   // Detail View Styles
//   detailContainer: {
//     background: 'white',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
//   },

//   detailHeader: {
//     background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
//     padding: '24px',
//     color: 'white',
//   },

//   backButton: {
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     marginBottom: '16px',
//     fontSize: '14px',
//     transition: 'all 0.3s ease',
//   },

//   detailTitle: {
//     fontSize: '2rem',
//     fontWeight: '700',
//     margin: '0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },

//   detailIcon: {
//     fontSize: '2rem',
//   },

//   detailContent: {
//     padding: '24px',
//   },

//   metricsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gap: '20px',
//     marginBottom: '32px',
//   },

//   metricCard: {
//     background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//     borderRadius: '12px',
//     padding: '20px',
//     textAlign: 'center',
//     border: '1px solid #e2e8f0',
//   },

//   metricValue: {
//     fontSize: '2rem',
//     fontWeight: '800',
//     color: '#1f2937',
//     marginBottom: '8px',
//   },

//   metricLabel: {
//     fontSize: '0.9rem',
//     color: '#6b7280',
//     fontWeight: '500',
//   },

//   panelsSection: {
//     marginTop: '32px',
//   },

//   subsectionTitle: {
//     fontSize: '1.3rem',
//     fontWeight: '600',
//     marginBottom: '16px',
//     color: '#1f2937',
//   },

//   panelsList: {
//     display: 'grid',
//     gap: '12px',
//   },

//   panelItem: {
//     background: '#f8fafc',
//     borderRadius: '8px',
//     padding: '16px',
//     border: '1px solid #e2e8f0',
//   },

//   panelInfo: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   panelLocation: {
//     fontWeight: '600',
//     color: '#1f2937',
//   },

//   panelStats: {
//     display: 'flex',
//     gap: '16px',
//     fontSize: '0.9rem',
//     color: '#6b7280',
//   },
// };

// export default AdminDashboard;