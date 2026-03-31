window.renderProfile = function() {
    return `
        <div class="profile-screen">
            <header style="margin-bottom: 24px; padding-top: 8px; text-align: center;">
                <img src="https://i.pravatar.cc/150?u=aziz" alt="Profile" style="width: 100px; height: 100px; border-radius: 50%; border: 4px solid var(--border); margin: 0 auto 16px;">
                <h1 style="font-size: 24px; font-weight: 700;">Azizbek K.</h1>
                <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">+998 90 123 45 67</p>
            </header>

            <div style="display: flex; flex-direction: column; gap: 12px;">
                <button class="glass-card" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: none; width: 100%; text-align: left; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i class="ph ph-calendar-check" style="font-size: 24px; color: var(--primary);"></i>
                        <span style="font-size: 16px; font-weight: 500;">My Appointments</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--text-muted);"></i>
                </button>

                <button class="glass-card" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: none; width: 100%; text-align: left; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i class="ph ph-file-text" style="font-size: 24px; color: var(--secondary);"></i>
                        <span style="font-size: 16px; font-weight: 500;">Medical Records</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--text-muted);"></i>
                </button>

                <button class="glass-card" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: none; width: 100%; text-align: left; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i class="ph ph-credit-card" style="font-size: 24px; color: #8b5cf6;"></i>
                        <span style="font-size: 16px; font-weight: 500;">Payment Methods</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--text-muted);"></i>
                </button>

                <button class="glass-card" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: none; width: 100%; text-align: left; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i class="ph ph-gear" style="font-size: 24px; color: var(--text-muted);"></i>
                        <span style="font-size: 16px; font-weight: 500;">Settings</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--text-muted);"></i>
                </button>

                <button class="glass-card" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: none; width: 100%; text-align: left; cursor: pointer; margin-top: 16px; background: #fee2e2; border-color: #fca5a5;" onclick="alert('Logged out')">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i class="ph ph-sign-out" style="font-size: 24px; color: #ef4444;"></i>
                        <span style="font-size: 16px; font-weight: 500; color: #b91c1c;">Log Out</span>
                    </div>
                </button>
            </div>
        </div>
    `;
}
