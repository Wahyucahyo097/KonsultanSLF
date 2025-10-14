const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGeminiAPI() {
  const API_KEY = 'AIzaSyAfgwOqnJlAAvAGVXJ_FsN76r1OJwdcM3A';
  const genAI = new GoogleGenerativeAI(API_KEY);

  // Test dengan berbagai model
  const models = ['gemini-1.5-flash', 'gemini-pro', 'gemini-1.5-pro'];
  
  for (const modelName of models) {
    try {
      console.log(`Testing model: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('Halo, siapa kamu?');
      const response = await result.response;
      console.log(`✅ ${modelName} works! Response:`, response.text());
      break;
    } catch (error) {
      console.log(`❌ ${modelName} failed:`, error.message);
    }
  }
}

testGeminiAPI();