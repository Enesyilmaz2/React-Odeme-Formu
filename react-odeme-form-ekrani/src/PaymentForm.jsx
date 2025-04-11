import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Kart Üzerindeki İsim: ${cardName}
      Kart Numarası: ${cardNumber}
      Ay: ${expiryMonth}
      Yıl: ${expiryYear}
      Güvenlik Kodu: ${cvv}
    `);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Ödeme Bilgileri</h2>
      <p>Kredi kartı bilgilerinizi giriniz</p>

      <label htmlFor="cardName">Kart Üzerindeki İsim</label>
      <input
        type="text"
        id="cardName"
        placeholder="Ahmet YILMAZ"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />

      <label htmlFor="cardNumber">Kart Numarası</label>
      <input
        type="text"
        id="cardNumber"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />

      <div className="row">
        <div className="month">
          <label htmlFor="expiryMonth">Ay</label>
          <select
            id="expiryMonth"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
          >
            <option value="">AA</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="year">
          <label htmlFor="expiryYear">Yıl</label>
          <select
            id="expiryYear"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
          >
            <option value="">YY</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="cvv">
          <label htmlFor="cvv">Güvenlik Kodu</label>
          <input
            type="text"
            id="cvv"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Şimdi Öde</button>
    </form>
  );
};

export default PaymentForm;
