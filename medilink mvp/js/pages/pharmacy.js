window.renderPharmacy = function() {
    return `
        <div class="pharmacy-screen">
            <header style="margin-bottom: 24px; padding-top: 8px;">
                <h1 style="font-size: 24px; font-weight: 700;">Pharmacy</h1>
                <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Order medicines directly to your door</p>
            </header>

            <!-- Search -->
            <div style="position: relative; margin-bottom: 24px;">
                <i class="ph ph-magnifying-glass" style="position: absolute; left: 16px; top: 14px; color: var(--text-muted); font-size: 20px;"></i>
                <input type="text" placeholder="Search medicines like Paracetamol..." style="width: 100%; padding: 14px 14px 14px 48px; border-radius: var(--radius); border: 1px solid var(--border); outline: none; font-size: 14px; box-shadow: var(--shadow-sm);">
            </div>

            <!-- Categories -->
            <div style="display: flex; gap: 8px; overflow-x: auto; margin-bottom: 24px; padding-bottom: 8px;">
                <button style="padding: 8px 16px; border-radius: 20px; background: #e0f2fe; color: var(--primary-dark); border: none; font-size: 13px; font-weight: 600; white-space: nowrap;">Pain Relief</button>
                <button style="padding: 8px 16px; border-radius: 20px; background: #fae8ff; color: #a21caf; border: none; font-size: 13px; font-weight: 600; white-space: nowrap;">Vitamins</button>
                <button style="padding: 8px 16px; border-radius: 20px; background: #ecfccb; color: #4d7c0f; border: none; font-size: 13px; font-weight: 600; white-space: nowrap;">First Aid</button>
                <button style="padding: 8px 16px; border-radius: 20px; background: #fee2e2; color: #b91c1c; border: none; font-size: 13px; font-weight: 600; white-space: nowrap;">Cold & Flu</button>
            </div>

            <!-- Medicines Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                
                <!-- Item 1 -->
                <div class="glass-card" style="padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <div style="width: 80px; height: 80px; margin-bottom: 12px; background: url('https://images.unsplash.com/photo-1584308666744-24d5eccf8df9?w=150&q=80') center/contain no-repeat;"></div>
                    <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Paracetamol 500mg</h3>
                    <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">10 tablets</p>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark); margin-bottom: 12px;">15,000 UZS</div>
                    <button class="btn btn-primary" style="width: 100%; padding: 8px; font-size: 12px; border-radius: 8px;" onclick="alert('Added to cart')">Add to Cart</button>
                </div>

                <!-- Item 2 -->
                <div class="glass-card" style="padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <div style="width: 80px; height: 80px; margin-bottom: 12px; background: url('https://images.unsplash.com/photo-1550572017-edb7999806bc?w=150&q=80') center/contain no-repeat;"></div>
                    <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Vitamin C 1000mg</h3>
                    <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">20 effervescent tabs</p>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark); margin-bottom: 12px;">45,000 UZS</div>
                    <button class="btn btn-primary" style="width: 100%; padding: 8px; font-size: 12px; border-radius: 8px;" onclick="alert('Added to cart')">Add to Cart</button>
                </div>

                <!-- Item 3 -->
                <div class="glass-card" style="padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <div style="width: 80px; height: 80px; margin-bottom: 12px; background: url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=150&q=80') center/contain no-repeat;"></div>
                    <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Nurofen Express</h3>
                    <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">12 capsules</p>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark); margin-bottom: 12px;">35,000 UZS</div>
                    <button class="btn btn-primary" style="width: 100%; padding: 8px; font-size: 12px; border-radius: 8px;" onclick="alert('Added to cart')">Add to Cart</button>
                </div>

                <!-- Item 4 -->
                <div class="glass-card" style="padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <div style="width: 80px; height: 80px; margin-bottom: 12px; background: url('https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=150&q=80') center/contain no-repeat;"></div>
                    <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Theraflu</h3>
                    <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">10 packets</p>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark); margin-bottom: 12px;">55,000 UZS</div>
                    <button class="btn btn-primary" style="width: 100%; padding: 8px; font-size: 12px; border-radius: 8px;" onclick="alert('Added to cart')">Add to Cart</button>
                </div>

            </div>
        </div>
    `;
}
