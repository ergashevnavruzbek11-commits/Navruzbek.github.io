window.renderLogin = function() {
    setTimeout(() => {
        // Hide bottom nav on login screen
        const nav = document.getElementById('bottom-nav');
        if(nav) nav.style.display = 'none';
        
        // Setup Login Button
        const btn = document.getElementById('login-btn');
        if(btn) {
            btn.addEventListener('click', () => {
                if(nav) nav.style.display = 'flex';
                window.navigate('/');
            });
        }
        
        // Setup Admin Button
        const adminBtn = document.getElementById('admin-btn');
        if(adminBtn) {
            adminBtn.addEventListener('click', () => {
                window.location.href = 'admin.html';
            });
        }
    }, 0);

    return `
        <div class="login-screen" style="display: flex; flex-direction: column; height: 100vh; justify-content: center; padding: 24px;">
            <div style="text-align: center; margin-bottom: 48px;">
                <div style="width: 80px; height: 80px; background: var(--primary); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.5);">
                    <i class="ph ph-heartbeat" style="font-size: 48px; color: white;"></i>
                </div>
                <h1 style="font-size: 32px; font-weight: 800; color: var(--text-main);">MediLink</h1>
                <p style="color: var(--text-muted); font-size: 16px; margin-top: 8px;">Your AI Healthcare Assistant</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px;">
                <div>
                    <label style="font-size: 14px; font-weight: 500; color: var(--text-muted); margin-bottom: 8px; display: block;">Phone Number</label>
                    <input type="tel" value="+998 90 123 45 67" style="width: 100%; padding: 16px; border-radius: 12px; border: 1px solid var(--border); outline: none; font-size: 16px; background: var(--surface);">
                </div>
                <div>
                    <label style="font-size: 14px; font-weight: 500; color: var(--text-muted); margin-bottom: 8px; display: block;">Password</label>
                    <input type="password" value="password123" style="width: 100%; padding: 16px; border-radius: 12px; border: 1px solid var(--border); outline: none; font-size: 16px; background: var(--surface);">
                </div>
                <div style="text-align: right;">
                    <a href="#" style="font-size: 13px; color: var(--primary); font-weight: 500; text-decoration: none;">Forgot Password?</a>
                </div>
            </div>

            <button id="login-btn" class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 16px; border-radius: 12px; margin-bottom: 16px;">Log In</button>
            
            <p style="text-align: center; font-size: 14px; color: var(--text-muted);">
                Don't have an account? <a href="#" style="color: var(--primary); font-weight: 600; text-decoration: none;">Sign Up</a>
            </p>

            <div style="margin-top: auto; text-align: center;">
                <button id="admin-btn" style="background: none; border: none; color: var(--text-muted); font-size: 13px; text-decoration: underline; cursor: pointer;">Go to Admin Panel</button>
            </div>
        </div>
    `;
}
