// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { NextResponse } from "next/server";

// // create an openAi client (that's edge friendly)
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// // set the runtime to edge for best performance
// export const runtime = 'edge';

// export async function POST(request:Request){
//     try{
//         // const {messages} = await request.json();
//         const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask sexual product experts questions anonymously. The questions should be suitable for a diverse audience, promoting open and respectful discussions about sexual health and wellness. Avoid explicit or overly personal topics, focusing instead on general curiosity, product inquiries, and wellness tips. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Include questions in English, Hindi, and Hinglish to cater to different language preferences. For example, your output should be structured like this: 'What are the benefits of using sexual wellness products regularly? || महिलाओं के लिए यौन स्वास्थ्य को बेहतर बनाने के लिए कौन-कौन से उपाय हैं? || Sexual wellness products ke use ke fayde kya hain, aur inka koi side effect toh nahi?'"

//     // Ask openAi for a streaming chat completion given the prompt
//     const response = await openai.completions.create({
//         model: 'gpt-3.5-turbo-instruct',
//         max_tokens: 400,
//         stream: true,
//         prompt,
//     });

//     // Convert the response into a friendly text-stream
//     const stream = OpenAIStream(response);
//     // Respond with the stream
//     return new StreamingTextResponse(stream);
//     } catch(error){
//        if(error instanceof OpenAI.APIError){
//         const {name, status, headers, message} = error;
//         return NextResponse.json({
//             name, status, headers, message
//         }, {status})
//        } else{
//         console.error("An unexpected error occurred", error )
//         throw error
//        }
//     }
// }





// import OpenAI from "openai";
// import { OpenAIStream, streamText } from "ai";
// import { NextResponse } from "next/server";

// // create an openAi client (that's edge friendly)
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// // set the runtime to edge for best performance
// export const runtime = 'edge';

// export async function POST(request:Request){
//     try{
//         // const {messages} = await request.json();
//         const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask sexual product experts questions anonymously. The questions should be suitable for a diverse audience, promoting open and respectful discussions about sexual health and wellness. Avoid explicit or overly personal topics, focusing instead on general curiosity, product inquiries, and wellness tips. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Include questions in English, Hindi, and Hinglish to cater to different language preferences. For example, your output should be structured like this: 'What are the benefits of using sexual wellness products regularly? || महिलाओं के लिए यौन स्वास्थ्य को बेहतर बनाने के लिए कौन-कौन से उपाय हैं? || Sexual wellness products ke use ke fayde kya hain, aur inka koi side effect toh nahi?'"

//     // Ask openAi for a streaming chat completion given the prompt
//     const response = await openai.completions.create({
//         model: 'gpt-3.5-turbo-instruct',
//         max_tokens: 400,
//         stream: true,
//         prompt,
//     });

//     // Convert the response into a friendly text-stream
//     const stream = OpenAIStream(response);
//     // Respond with the stream
//     return new StreamingTextResponse(stream);
//     } catch(error){
//        if(error instanceof OpenAI.APIError){
//         const {name, status, headers, message} = error;
//         return NextResponse.json({
//             name, status, headers, message
//         }, {status})
//        } else{
//         console.error("An unexpected error occurred", error )
//         throw error
//        }
//     }
// }


