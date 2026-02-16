import React, { useState } from 'react';
import { Container, Accordion, Table } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';
import './FeeStructure.css';

const FeeStructure = () => {
  const [activeTab, setActiveTab] = useState('leet');

  return (
    <div className="fee-structure-page">
      {/* Fee Structure Header */}
      <div className="fee-header">
        <h1 className="fee-main-title">FEE STRUCTURE</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="fee-tabs-container">
        <Container>
          <div className="fee-tabs">
            <button 
              className={`fee-tab ${activeTab === 'leet' ? 'active' : ''}`}
              onClick={() => setActiveTab('leet')}
            >
              <div className="tab-icon">
                <FaUsers />
              </div>
              <span>LEET Exam</span>
            </button>
            <button 
              className={`fee-tab ${activeTab === 'polytechnic-entrance' ? 'active' : ''}`}
              onClick={() => setActiveTab('polytechnic-entrance')}
            >
              <div className="tab-icon">
                <FaUsers />
              </div>
              <span>Polytechnic Entrance</span>
            </button>
            <button 
              className={`fee-tab ${activeTab === 'polytechnic-placement' ? 'active' : ''}`}
              onClick={() => setActiveTab('polytechnic-placement')}
            >
              <div className="tab-icon">
                <FaUsers />
              </div>
              <span>Polytechnic Placement</span>
            </button>
            <button 
              className={`fee-tab ${activeTab === 'semester-coaching' ? 'active' : ''}`}
              onClick={() => setActiveTab('semester-coaching')}
            >
              <div className="tab-icon">
                <FaUsers />
              </div>
              <span>Semester Coaching</span>
            </button>
          </div>
        </Container>
      </div>

      {/* Fee Structure Content */}
      <div className="fee-content-section">
        <Container>
          {activeTab === 'leet' && (
            <>
              <h2 className="fee-section-title">LEET Exam Coaching Fee Structure</h2>

              {/* Delhi LEET 2025 Fee Structure */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="fee-accordion-item">
                  <Accordion.Header>Delhi LEET 2025 Fee Structure</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>19000</td>
                            <td>20000</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>13000</td>
                            <td>14000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>8000</td>
                            <td>8000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>3000</td>
                            <td>–</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In The App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>500</td>
                            <td>–</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>1000</td>
                            <td>–</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* CUET LEET 2025 Fee Structure */}
                <Accordion.Item eventKey="1" className="fee-accordion-item">
                  <Accordion.Header>CUET LEET 2025 Fee Structure</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>19000</td>
                            <td>20000</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>13000</td>
                            <td>14000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>8000</td>
                            <td>8000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>3000</td>
                            <td>–</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In The App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>500</td>
                            <td>–</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>1000</td>
                            <td>–</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* All India LEET 2025 Fee Structure */}
                <Accordion.Item eventKey="2" className="fee-accordion-item">
                  <Accordion.Header>All India LEET 2025 Fee Structure</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>24000</td>
                            <td>25000</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>17500</td>
                            <td>16500</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>10000</td>
                            <td>10000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>4000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In the App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>1000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>2000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Delhi LEET 2026 Fee Structure */}
                <Accordion.Item eventKey="3" className="fee-accordion-item">
                  <Accordion.Header>Delhi LEET 2026 Fee Structure</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>29000</td>
                            <td>30000</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>20000</td>
                            <td>21000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In the App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>750</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>1500</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* CUET LEET 2026 Fee Structure */}
                <Accordion.Item eventKey="4" className="fee-accordion-item">
                  <Accordion.Header>CUET LEET 2026 Fee Structure</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>29000</td>
                            <td>30000</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>20000</td>
                            <td>21000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In the App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>750</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>1500</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* All India LEET 2026 Fee Structure */}
                <Accordion.Item eventKey="5" className="fee-accordion-item">
                  <Accordion.Header>All India LEET 2026 Fee Structure</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>36500</td>
                            <td>37500</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>25250</td>
                            <td>26250</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>15000</td>
                            <td>15000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>4000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In the App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>1500</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          )}

          {activeTab === 'polytechnic-entrance' && (
            <>
              <h2 className="fee-section-title">Polytechnic Entrance Coaching Fee Structure</h2>
              
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="fee-accordion-item">
                  <Accordion.Header>Delhi Polytechnic DSEU</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline</td>
                            <td>1000</td>
                            <td>9000</td>
                            <td>10000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Live + Recorded)</td>
                            <td>1000</td>
                            <td>6000</td>
                            <td>7000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Online (Recorded)</td>
                            <td>–</td>
                            <td>2000</td>
                            <td>2000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Study Material (Hard Copy – At Door Step)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>2000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Study Material (Soft Copy – In the App)</td>
                            <td>–</td>
                            <td>–</td>
                            <td>500</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Test Series</td>
                            <td>–</td>
                            <td>–</td>
                            <td>500</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          )}

          {activeTab === 'polytechnic-placement' && (
            <>
              <h2 className="fee-section-title">Polytechnic Placement Coaching Fee Structure</h2>
              
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="fee-accordion-item">
                  <Accordion.Header>Polytechnic Placement Coaching</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Offline (Full Course)</td>
                            <td>1000</td>
                            <td>19000</td>
                            <td>20000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Online (Full Course)</td>
                            <td>1000</td>
                            <td>19000</td>
                            <td>20000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Written Test</td>
                            <td>1000</td>
                            <td>9000</td>
                            <td>10000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Interview Preparation</td>
                            <td>1000</td>
                            <td>9000</td>
                            <td>10000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          )}

          {activeTab === 'semester-coaching' && (
            <>
              <h2 className="fee-section-title">Semester Coaching Fee Structure</h2>

              {/* Mechanical Engineering */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="fee-accordion-item">
                  <Accordion.Header>Mechanical Engineering</Accordion.Header>
                  <Accordion.Body>
                    <h5 className="semester-title">Semester 1</h5>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Applied Mathematics I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Applied Mechanics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Engineering Graphics I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Applied Physics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <h5 className="semester-title">Semester 2</h5>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Applied Mathematics II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Applied Chemistry</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Engineering Graphics II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Applied Physics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <h5 className="semester-title">Semester 3</h5>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Thermal I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Material Science</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <h5 className="semester-title">Semester 4</h5>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Strength Of Material</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Fluid Mechanics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Thermal II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <h5 className="semester-title">Semester 5</h5>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Theory Of Machine</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>CNC</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <h5 className="semester-title">Semester 6</h5>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>RAC</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Machine Design</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Automobile</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Computer Science */}
                <Accordion.Item eventKey="1" className="fee-accordion-item">
                  <Accordion.Header>Computer Science</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Applied Mathematics I</td>
                            <td>500</td>
                            <td>3000</td>
                            <td>3500</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Applied Mathematics II</td>
                            <td>500</td>
                            <td>3000</td>
                            <td>3500</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Engineering Graphics I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Applied Physics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>C Language</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Basic Electronics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Electronics Engineering */}
                <Accordion.Item eventKey="2" className="fee-accordion-item">
                  <Accordion.Header>Electronics Engineering</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <Table className="fee-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Course</th>
                            <th>Registration Fee</th>
                            <th>Tuition Fee</th>
                            <th>Total Fee</th>
                            <th>Installment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Applied Mathematics I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Applied Mathematics II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Engineering Graphics I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Applied Physics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>C Language</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Analog Electronics I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Analog Electronics II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Digital Electronics</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Electrical Machine I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Electrical Machine II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>Basic Electrical Engg.</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>NATL</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>EDC I</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>EDC II</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>Microprocessor</td>
                            <td>500</td>
                            <td>2500</td>
                            <td>3000</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default FeeStructure;
