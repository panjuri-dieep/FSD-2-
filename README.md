/* Soil Moisture Dashboard CSS */
body {
  background: #f5f7fa;
  font-family: 'Segoe UI', Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #222;
}

.dashboard-container {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  box-shadow: 0 4px 16px rgba(60,60,120,0.09);
  border-radius: 15px;
  padding: 32px 28px;
}

.dashboard-title {
  font-size: 2.1rem;
  font-weight: 600;
  color: #357860;
  margin-bottom: 18px;
  text-align: center;
}

.moisture-value {
  font-size: 3.3rem;
  font-weight: 700;
  color: #255647;
  margin: 16px 0 10px 0;
  text-align: center;
}

.moisture-label {
  font-size: 1.19rem;
  color: #4a6353;
  text-align: center;
  margin-bottom: 20px;
}

.progress-bar-container {
  width: 90%;
  margin: 32px auto;
  height: 26px;
  background: #e1e7ea;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(80,120,120,0.08);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4ad991 0%, #23a570 100%);
  transition: width 0.7s cubic-bezier(0.4,0.2,0.2,1);
}

.status-badge {
  display: inline-block;
  padding: 7px 19px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 1rem;
  background: #d0efd6;
  color: #2b7d41;
  margin: 16px auto 0 auto;
  text-align: center;
}

@media (max-width: 700px) {
  .dashboard-container {
    padding: 18px 5px;
    max-width: 99%;
  }
  .dashboard-title {
    font-size: 1.4rem;
  }
  .moisture-value {
    font-size: 2rem;
  }
}