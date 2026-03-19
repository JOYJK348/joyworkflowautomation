'use client';

import { useState, useEffect } from 'react';
import styles from './RoiCalculator.module.css';

const WORKING_DAYS_PER_YEAR = 300;
const WORKING_DAYS_PER_MONTH = 25;

export default function RoiCalculator({ dict, lang }: { dict: any; lang: string }) {
  const { calculator } = dict.hero;

  // States for the inputs
  const [appointments, setAppointments] = useState<number>(15);
  const [noShow, setNoShow] = useState<number>(25);
  const [revenue, setRevenue] = useState<number>(1000);
  const [adminTime, setAdminTime] = useState<number>(60);
  const [timeframe, setTimeframe] = useState<'yearly' | 'monthly'>('yearly');
  const [activeTier, setActiveTier] = useState<'early' | 'growing' | 'scale'>('growing');

  // Handle Tier selection and reset defaults
  const handleTierChange = (tier: 'early' | 'growing' | 'scale') => {
    setActiveTier(tier);
    if (tier === 'early') {
      setAppointments(2);
      setNoShow(10);
      setRevenue(200);
      setAdminTime(15);
    } else if (tier === 'growing') {
      setAppointments(8);
      setNoShow(15);
      setRevenue(600);
      setAdminTime(30);
    } else {
      setAppointments(30);
      setNoShow(20);
      setRevenue(1500);
      setAdminTime(60);
    }
  };

  // States for calculated results
  const [yearlyLoss, setYearlyLoss] = useState<number>(0);
  const [hoursWasted, setHoursWasted] = useState<number>(0);

  // Animate the numbers smoothly
  const [displayLoss, setDisplayLoss] = useState<number>(0);

  // Calculations
  useEffect(() => {
    // How many people don't show up per day?
    const missedPerDay = appointments * (noShow / 100);
    // Revenue lost per day
    const lostRevPerDay = missedPerDay * revenue;
    
    const daysMultiplier = timeframe === 'yearly' ? WORKING_DAYS_PER_YEAR : WORKING_DAYS_PER_MONTH;
    
    // Total loss
    const totalLoss = lostRevPerDay * daysMultiplier;
    
    // Total hours wasted
    const totalHours = (adminTime * daysMultiplier) / 60;

    setYearlyLoss(Math.round(totalLoss));
    setHoursWasted(Math.round(totalHours));
  }, [appointments, noShow, revenue, adminTime, timeframe]);

  // Simple number animation for the big red loss number
  useEffect(() => {
    const step = Math.ceil((yearlyLoss - displayLoss) / 10);
    if (displayLoss !== yearlyLoss) {
      if (Math.abs(yearlyLoss - displayLoss) < 10) {
        setDisplayLoss(yearlyLoss);
      } else {
        const timer = setTimeout(() => {
          setDisplayLoss((prev) => prev + step);
        }, 15);
        return () => clearTimeout(timer);
      }
    }
  }, [yearlyLoss, displayLoss]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className={styles.roi} id="calculator" data-lang={lang}>
      <div className={`container ${styles.roi__inner}`}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className="section-title">{calculator.title}</h2>
          <p className="section-sub">{calculator.subtitle}</p>
        </div>

        {/* Tier Selector (Radio Concept) */}
        <div className={styles.tier__selection__container}>
          <div className={styles.tier__radio__group}>
            <button 
              className={`${styles.radio__btn} ${activeTier === 'early' ? styles.activeRadio : ''}`}
              onClick={() => handleTierChange('early')}
              suppressHydrationWarning
            >
              <span className={styles.radio__circle} />
              {calculator.tiers.early}
            </button>
            <button 
              className={`${styles.radio__btn} ${activeTier === 'growing' ? styles.activeRadio : ''}`}
              onClick={() => handleTierChange('growing')}
              suppressHydrationWarning
            >
              <span className={styles.radio__circle} />
              {calculator.tiers.growing}
            </button>
            <button 
              className={`${styles.radio__btn} ${activeTier === 'scale' ? styles.activeRadio : ''}`}
              onClick={() => handleTierChange('scale')}
              suppressHydrationWarning
            >
              <span className={styles.radio__circle} />
              {calculator.tiers.scale}
            </button>
          </div>
          <p className={styles.tier__description}>
            {activeTier === 'early' && calculator.tiers.earlyDesc}
            {activeTier === 'growing' && calculator.tiers.growingDesc}
            {activeTier === 'scale' && calculator.tiers.scaleDesc}
          </p>
        </div>

        {/* Calculator Body */}
        <div className={styles.calc__box}>
          
          {/* Left: Inputs */}
          <div className={styles.controls}>
            
            <div className={styles.input__group}>
              <div className={styles.label__row}>
                <label>{calculator.inputs.appointments}</label>
                <span className={styles.value}>{appointments}</span>
              </div>
              <input 
                type="range" 
                min={activeTier === 'early' ? "1" : activeTier === 'growing' ? "5" : "20"}
                max={activeTier === 'early' ? "10" : activeTier === 'growing' ? "35" : "120"}
                value={appointments} 
                onChange={(e) => setAppointments(Number(e.target.value))}
                className={styles.slider}
              />
            </div>

            <div className={styles.input__group}>
              <div className={styles.label__row}>
                <label>{calculator.inputs.noShow}</label>
                <span className={styles.value}>{noShow}%</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" step="5"
                value={noShow} 
                onChange={(e) => setNoShow(Number(e.target.value))}
                className={styles.slider}
              />
            </div>

            <div className={styles.input__group}>
              <div className={styles.label__row}>
                <label>{calculator.inputs.revenue}</label>
                <span className={styles.value}>₹{revenue}</span>
              </div>
              <input 
                type="range" 
                min={activeTier === 'early' ? "100" : activeTier === 'growing' ? "300" : "1000"}
                max={activeTier === 'early' ? "1200" : activeTier === 'growing' ? "6000" : "30000"}
                step="100"
                value={revenue} 
                onChange={(e) => setRevenue(Number(e.target.value))}
                className={styles.slider}
              />
            </div>

            <div className={styles.input__group}>
              <div className={styles.label__row}>
                <label>{calculator.inputs.adminTime}</label>
                <span className={styles.value}>{adminTime} mins</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max={activeTier === 'early' ? "45" : activeTier === 'growing' ? "90" : "240"}
                step="5"
                value={adminTime} 
                onChange={(e) => setAdminTime(Number(e.target.value))}
                className={styles.slider}
              />
            </div>

          </div>

          {/* Right: Results Dashboard */}
          <div className={styles.results}>
            
            <div className={styles.toggle__wrapper}>
              <div className={styles.toggle__bg}>
                <button 
                  className={`${styles.toggle__btn} ${timeframe === 'yearly' ? styles.active : ''}`}
                  onClick={() => setTimeframe('yearly')}
                  suppressHydrationWarning
                >
                  {calculator.results.toggleYearly}
                </button>
                <button 
                  className={`${styles.toggle__btn} ${timeframe === 'monthly' ? styles.active : ''}`}
                  onClick={() => setTimeframe('monthly')}
                  suppressHydrationWarning
                >
                  {calculator.results.toggleMonthly}
                </button>
              </div>
            </div>

            <div className={styles.result__card}>
              <div className={styles.loss__label}>
                {timeframe === 'yearly' ? calculator.results.yearlyLoss : calculator.results.monthlyLoss}
              </div>
              <div className={styles.loss__amount}>{formatCurrency(displayLoss)}</div>
            </div>

            <div className={styles.time__card}>
              <div className={styles.time__icon}>⏱️</div>
              <div className={styles.time__data}>
                <span className={styles.time__label}>
                  {timeframe === 'yearly' ? calculator.results.timeWastedYearly : calculator.results.timeWastedMonthly}
                </span>
                <span className={styles.time__amount}>{hoursWasted} {lang === 'ta' ? 'மணிநேரம்' : 'Hours'}</span>
              </div>
            </div>

            <div className={styles.cta__box}>
              <p className={styles.cta__text}>{calculator.results.fixIt}</p>
              <a href="#contact" className={styles.btn__cta}>
                {calculator.results.cta}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
