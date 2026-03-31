window.renderDoctors = function() {
    return `
        <div class="doctors-screen">
            <header style="margin-bottom: 24px; padding-top: 8px;">
                <h1 style="font-size: 24px; font-weight: 700;">Find a Doctor</h1>
                <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Top specialists in Uzbekistan</p>
            </header>

            <!-- Filters -->
            <div style="display: flex; gap: 8px; overflow-x: auto; margin-bottom: 24px; padding-bottom: 8px;">
                <button style="padding: 8px 16px; border-radius: 20px; background: var(--primary); color: white; border: none; font-size: 14px; font-weight: 500; white-space: nowrap;">All</button>
                <button style="padding: 8px 16px; border-radius: 20px; background: var(--surface); color: var(--text-main); border: 1px solid var(--border); font-size: 14px; font-weight: 500; white-space: nowrap;">Cardiologist</button>
                <button style="padding: 8px 16px; border-radius: 20px; background: var(--surface); color: var(--text-main); border: 1px solid var(--border); font-size: 14px; font-weight: 500; white-space: nowrap;">Pediatrician</button>
                <button style="padding: 8px 16px; border-radius: 20px; background: var(--surface); color: var(--text-main); border: 1px solid var(--border); font-size: 14px; font-weight: 500; white-space: nowrap;">Neurologist</button>
            </div>

            <!-- Doctor List -->
            <div style="display: flex; flex-direction: column; gap: 16px;">
                
                <!-- Doctor Card 1 -->
                <div class="glass-card" style="padding: 16px;">
                    <div style="display: flex; gap: 16px;">
                        <img src="https://i.pravatar.cc/150?u=doc1" alt="Dr. Timur" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;">
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div>
                                    <h3 style="font-size: 16px; font-weight: 600;">Dr. Timur Abdullaev</h3>
                                    <p style="font-size: 13px; color: var(--primary); font-weight: 500; margin-top: 2px;">Cardiologist</p>
                                </div>
                                <div style="display: flex; align-items: center; gap: 4px; background: #fef08a; padding: 2px 6px; border-radius: 4px;">
                                    <i class="ph-fill ph-star" style="color: #eab308; font-size: 12px;"></i>
                                    <span style="font-size: 12px; font-weight: 600;">4.9</span>
                                </div>
                            </div>
                            <div style="margin-top: 8px; display: flex; align-items: center; gap: 16px;">
                                <div style="display: flex; align-items: center; gap: 4px; color: var(--text-muted); font-size: 12px;">
                                    <i class="ph ph-briefcase"></i> 15 yrs
                                </div>
                                <div style="display: flex; align-items: center; gap: 4px; color: var(--text-muted); font-size: 12px;">
                                    <i class="ph ph-wallet"></i> 250k UZS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px;">
                        <button class="btn" style="background: #f1f5f9; color: var(--text-main); font-size: 13px; padding: 8px;" onclick="alert('Opening chat...')"><i class="ph ph-chat-circle-dots" style="margin-right: 4px; font-size: 18px;"></i> Chat</button>
                        <button class="btn btn-primary" style="font-size: 13px; padding: 8px;" onclick="window.navigate('/book')">Book Appt</button>
                    </div>
                </div>

                <!-- Doctor Card 2 -->
                <div class="glass-card" style="padding: 16px;">
                    <div style="display: flex; gap: 16px;">
                        <img src="https://i.pravatar.cc/150?u=doc2" alt="Dr. Malika" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;">
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div>
                                    <h3 style="font-size: 16px; font-weight: 600;">Dr. Malika Karimova</h3>
                                    <p style="font-size: 13px; color: var(--primary); font-weight: 500; margin-top: 2px;">Pediatrician</p>
                                </div>
                                <div style="display: flex; align-items: center; gap: 4px; background: #fef08a; padding: 2px 6px; border-radius: 4px;">
                                    <i class="ph-fill ph-star" style="color: #eab308; font-size: 12px;"></i>
                                    <span style="font-size: 12px; font-weight: 600;">4.8</span>
                                </div>
                            </div>
                            <div style="margin-top: 8px; display: flex; align-items: center; gap: 16px;">
                                <div style="display: flex; align-items: center; gap: 4px; color: var(--text-muted); font-size: 12px;">
                                    <i class="ph ph-briefcase"></i> 8 yrs
                                </div>
                                <div style="display: flex; align-items: center; gap: 4px; color: var(--text-muted); font-size: 12px;">
                                    <i class="ph ph-wallet"></i> 180k UZS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px;">
                        <button class="btn" style="background: #f1f5f9; color: var(--text-main); font-size: 13px; padding: 8px;" onclick="alert('Opening chat...')"><i class="ph ph-chat-circle-dots" style="margin-right: 4px; font-size: 18px;"></i> Chat</button>
                        <button class="btn btn-primary" style="font-size: 13px; padding: 8px;" onclick="window.navigate('/book')">Book Appt</button>
                    </div>
                </div>

            </div>
        </div>
    `;
}
