window.renderBook = function() {
    return `
        <div class="book-screen">
            <header style="margin-bottom: 24px; padding-top: 8px; display: flex; align-items: center; gap: 16px;">
                <button style="background: none; border: none; color: var(--text-main); cursor: pointer; display: flex;" onclick="window.navigate('/doctors')">
                    <i class="ph ph-arrow-left" style="font-size: 24px;"></i>
                </button>
                <h1 style="font-size: 20px; font-weight: 700;">Book Appointment</h1>
            </header>

            <div class="glass-card" style="display: flex; gap: 16px; padding: 16px; margin-bottom: 24px;">
                <img src="https://i.pravatar.cc/150?u=doc1" alt="Dr. Timur" style="width: 64px; height: 64px; border-radius: 12px; object-fit: cover;">
                <div>
                    <h3 style="font-size: 16px; font-weight: 600;">Dr. Timur Abdullaev</h3>
                    <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Cardiologist</p>
                    <p style="font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-top: 4px;">250,000 UZS</p>
                </div>
            </div>

            <!-- Date Selection -->
            <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Select Date</h3>
            <div style="display: flex; gap: 12px; overflow-x: auto; margin-bottom: 24px; padding-bottom: 8px;">
                <div style="min-width: 64px; background: var(--primary); color: white; border-radius: 12px; padding: 12px; text-align: center; cursor: pointer;">
                    <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">Mon</div>
                    <div style="font-size: 18px; font-weight: 700;">14</div>
                </div>
                <div class="glass-card" style="min-width: 64px; border-radius: 12px; padding: 12px; text-align: center; cursor: pointer; margin-bottom: 0;">
                    <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 4px;">Tue</div>
                    <div style="font-size: 18px; font-weight: 700;">15</div>
                </div>
                <div class="glass-card" style="min-width: 64px; border-radius: 12px; padding: 12px; text-align: center; cursor: pointer; margin-bottom: 0;">
                    <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 4px;">Wed</div>
                    <div style="font-size: 18px; font-weight: 700;">16</div>
                </div>
            </div>

            <!-- Time Selection -->
            <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Select Time</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 32px;">
                <div class="glass-card" style="text-align: center; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 500; cursor: pointer; margin-bottom: 0;">09:00 AM</div>
                <div style="background: var(--primary); color: white; text-align: center; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 500; cursor: pointer;">10:00 AM</div>
                <div class="glass-card" style="text-align: center; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 500; opacity: 0.5; cursor: not-allowed; margin-bottom: 0;">11:00 AM</div>
            </div>

            <button class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 16px; border-radius: 12px; box-shadow: var(--shadow-md);" onclick="alert('Payment integrated here! Appointment confirmed.'); window.navigate('/profile');">Confirm & Pay</button>
        </div>
    `;
}
