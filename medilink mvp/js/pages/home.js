window.renderHome = function() {
    return `
        <div class="home-screen">
            <header class="header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <div>
                    <p style="color: var(--text-muted); font-size: 14px;">Good morning,</p>
                    <h1 style="font-size: 24px; font-weight: 700;">Azizbek</h1>
                </div>
                <img src="https://i.pravatar.cc/150?u=aziz" alt="Profile" style="width: 48px; border-radius: 50%;">
            </header>

            <!-- Search Bar -->
            <div style="position: relative; margin-bottom: 24px;">
                <i class="ph ph-magnifying-glass" style="position: absolute; left: 16px; top: 14px; color: var(--text-muted); font-size: 20px;"></i>
                <input type="text" placeholder="Search doctors, clinics..." style="width: 100%; padding: 14px 14px 14px 48px; border-radius: var(--radius); border: 1px solid var(--border); outline: none; font-size: 16px;">
            </div>

            <!-- Action Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px;">
                <div class="glass-card" onclick="window.navigate('/ai-chat')" style="cursor: pointer; background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); border-color: #7dd3fc;">
                    <i class="ph ph-robot" style="font-size: 32px; color: var(--primary-dark); margin-bottom: 8px;"></i>
                    <h3 style="font-size: 16px; font-weight: 600; color: var(--primary-dark);">AI Symptom Checker</h3>
                    <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Check symptoms instantly</p>
                </div>
                <div class="glass-card" onclick="window.navigate('/doctors')" style="cursor: pointer; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-color: #6ee7b7;">
                    <i class="ph ph-stethoscope" style="font-size: 32px; color: var(--secondary); margin-bottom: 8px;"></i>
                    <h3 style="font-size: 16px; font-weight: 600; color: #047857;">Talk to Doctor</h3>
                    <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Book a consultation</p>
                </div>
            </div>

            <!-- Popular Categories -->
            <div style="margin-bottom: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h2 style="font-size: 18px; font-weight: 600;">Specialties</h2>
                    <span style="color: var(--primary); font-size: 14px; font-weight: 500; cursor: pointer;">See All</span>
                </div>
                <div style="display: flex; overflow-x: auto; gap: 16px; padding-bottom: 8px;">
                    <div style="text-align: center; min-width: 80px;">
                        <div style="width: 64px; height: 64px; border-radius: 16px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px;">
                            <i class="ph ph-heartbeat" style="font-size: 28px; color: #ef4444;"></i>
                        </div>
                        <span style="font-size: 12px; font-weight: 500;">Cardiology</span>
                    </div>
                    <div style="text-align: center; min-width: 80px;">
                        <div style="width: 64px; height: 64px; border-radius: 16px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px;">
                            <i class="ph ph-brain" style="font-size: 28px; color: #8b5cf6;"></i>
                        </div>
                        <span style="font-size: 12px; font-weight: 500;">Neurology</span>
                    </div>
                    <div style="text-align: center; min-width: 80px;">
                        <div style="width: 64px; height: 64px; border-radius: 16px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px;">
                            <i class="ph ph-tooth" style="font-size: 28px; color: #3b82f6;"></i>
                        </div>
                        <span style="font-size: 12px; font-weight: 500;">Dental</span>
                    </div>
                    <div style="text-align: center; min-width: 80px;">
                        <div style="width: 64px; height: 64px; border-radius: 16px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px;">
                            <i class="ph ph-eye" style="font-size: 28px; color: #ec4899;"></i>
                        </div>
                        <span style="font-size: 12px; font-weight: 500;">Vision</span>
                    </div>
                </div>
            </div>

            <!-- Health Tips Feed -->
            <div>
                <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Daily Health Tips</h2>
                <div class="glass-card" style="display: flex; gap: 16px; padding: 12px;">
                    <div style="width: 80px; height: 80px; border-radius: 8px; background: url('https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?w=150&q=80') center/cover;"></div>
                    <div style="flex: 1;">
                        <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Benefits of staying hydrated</h4>
                        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Drink at least 8 glasses of water daily to maintain energy levels.</p>
                        <span style="font-size: 10px; color: var(--primary); font-weight: 600; background: #e0f2fe; padding: 4px 8px; border-radius: 4px;">Nutrition</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
