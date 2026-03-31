window.renderAIChat = function() {
    window.initChat = () => {
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const chatBox = document.getElementById('chat-box');

        const appendMessage = (text, sender) => {
            const div = document.createElement('div');
            const isUser = sender === 'user';
            
            div.style.cssText = `
                max-width: 80%;
                margin-bottom: 16px;
                padding: 12px 16px;
                border-radius: 16px;
                font-size: 14px;
                line-height: 1.4;
                animation: fadeIn 0.3s ease;
                clear: both;
                float: ${isUser ? 'right' : 'left'};
                background-color: ${isUser ? 'var(--primary)' : '#f1f5f9'};
                color: ${isUser ? 'white' : 'var(--text-main)'};
                border-bottom-${isUser ? 'right' : 'left'}-radius: 4px;
            `;
            div.innerText = text;
            chatBox.appendChild(div);
            // Handle clearing floats
            const clearFixed = document.createElement('div');
            clearFixed.style.clear = 'both';
            chatBox.appendChild(clearFixed);
            
            chatBox.scrollTop = chatBox.scrollHeight;
        };

        sendBtn.addEventListener('click', () => {
            const text = input.value.trim();
            if(!text) return;
            
            appendMessage(text, 'user');
            input.value = '';

            // Mock AI Response
            setTimeout(() => {
                let response = "Based on your symptoms, this could be a mild respiratory infection. I recommend resting and drinking fluids. If symptoms persist to a high fever, please consult a General Practitioner.";
                let doctorType = "General Practitioner";
                const lowerText = text.toLowerCase();
                
                if (lowerText.includes("hello") || lowerText.includes("hi")) {
                    response = "Hello! Please describe any symptoms you are experiencing today.";
                    doctorType = null;
                } else if (lowerText.includes("headache") || lowerText.includes("migraine")) {
                    response = "Frequent or severe headaches could be caused by tension, dehydration, or migraines. If it is accompanied by vision changes or numbness, you should immediately consult a Neurologist.";
                    doctorType = "Neurologist";
                } else if (lowerText.includes("heart") || lowerText.includes("chest")) {
                    response = "Chest pain or heart palpitations can be serious. Please rest immediately and consider speaking to a Cardiologist as soon as possible.";
                    doctorType = "Cardiologist";
                } else if (lowerText.includes("stomach") || lowerText.includes("pain")) {
                    response = "Stomach pain can result from indigestion, food poisoning, or other gastrointestinal issues. If it persists, a Specialist should evaluate it.";
                    doctorType = "Gastroenterologist";
                }

                appendMessage(response, 'ai');
                
                if (doctorType) {
                    setTimeout(() => {
                        const actionContainer = document.createElement('div');
                        actionContainer.style.clear = 'both';
                        actionContainer.style.float = 'left';
                        actionContainer.style.marginTop = '8px';
                        actionContainer.innerHTML = `<button class="btn btn-secondary" style="font-size: 12px; padding: 6px 12px;" onclick="window.navigate('/doctors')">Find a ${doctorType}</button>`;
                        chatBox.appendChild(actionContainer);
                        chatBox.scrollTop = chatBox.scrollHeight;
                    }, 500);
                }
            }, 800);
        });

        input.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') sendBtn.click();
        });
    };

    return `
        <div class="chat-screen" style="display: flex; flex-direction: column; height: 100%;">
            <header style="margin-bottom: 16px; padding-top: 8px; border-bottom: 1px solid var(--border); padding-bottom: 16px; display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-dark); display: flex; align-items: center; justify-content: center;">
                    <i class="ph ph-robot" style="color: white; font-size: 24px;"></i>
                </div>
                <div>
                    <h1 style="font-size: 18px; font-weight: 600;">MediLink AI</h1>
                    <p style="color: var(--secondary); font-size: 12px; font-weight: 500; display: flex; align-items: center; gap: 4px;"><span style="width: 8px; height: 8px; background: var(--secondary); border-radius: 50%; display: inline-block;"></span> Online</p>
                </div>
            </header>

            <div id="chat-box" style="flex: 1; overflow-y: auto; padding-right: 4px; padding-bottom: 20px;">
                <!-- Initial Message -->
                <div style="max-width: 80%; margin-bottom: 16px; padding: 12px 16px; border-radius: 16px; font-size: 14px; line-height: 1.4; float: left; background-color: #f1f5f9; color: var(--text-main); border-bottom-left-radius: 4px;">
                    Hello! I'm MediLink AI. Please tell me about your symptoms or ask any health-related questions.
                </div>
                <div style="clear: both;"></div>
            </div>

            <!-- Input Box -->
            <div style="margin-top: auto; padding-top: 16px; position: relative;">
                <input id="chat-input" type="text" placeholder="Describe your symptoms..." style="width: 100%; padding: 14px 48px 14px 16px; border-radius: 24px; border: 1px solid var(--border); outline: none; font-size: 14px; background: #f8fafc; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">
                <button id="send-btn" style="position: absolute; right: 8px; top: 22px; width: 32px; height: 32px; border-radius: 50%; background: var(--primary); color: white; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s;">
                    <i class="ph-fill ph-paper-plane-right" style="font-size: 16px;"></i>
                </button>
            </div>
        </div>
    `;
}
