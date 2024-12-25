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




// // NEWWWWWW

// import OpenAI from "openai";
// import { NextResponse } from "next/server";

// // Create an OpenAI client
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// // Set the runtime to edge
// export const runtime = 'edge';

// export async function POST(request: Request) {
//     try {
//         // Parse the request body if needed
//         const body = await request.json();

//         // Define the prompt for the chat completion
//         const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask sexual product experts questions anonymously. The questions should be suitable for a diverse audience, promoting open and respectful discussions about sexual health and wellness. Avoid explicit or overly personal topics, focusing instead on general curiosity, product inquiries, and wellness tips. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Include questions in English, Hindi, and Hinglish to cater to different language preferences. For example, your output should be structured like this: 'What are the benefits of using sexual wellness products regularly? || महिलाओं के लिए यौन स्वास्थ्य को बेहतर बनाने के लिए कौन-कौन से उपाय हैं? || Sexual wellness products ke use ke fayde kya hain, aur inka koi side effect toh nahi?'";

//         // Make the API call
//         const response = await openai.chat.completions.create({
//             model: 'gpt-3.5-turbo',
//             messages: [{ role: 'user', content: prompt }],
//             max_tokens: 400,
//             stream: false,  // Use stream: true if you want to handle streaming responses
//         });

//         // Return the API response
//         return NextResponse.json(response);
//     } catch (error) {
//         console.error("An unexpected error occurred", error);
//         return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
//     }
// }




// NEW END





// // import OpenAI from "openai";
// // import { OpenAIStream, streamText } from "ai";
// // import { NextResponse } from "next/server";

// // // create an openAi client (that's edge friendly)
// // const openai = new OpenAI({
// //     apiKey: process.env.OPENAI_API_KEY,
// // });

// // // set the runtime to edge for best performance
// // export const runtime = 'edge';

// // export async function POST(request:Request){
// //     try{
// //         // const {messages} = await request.json();
// //         const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask sexual product experts questions anonymously. The questions should be suitable for a diverse audience, promoting open and respectful discussions about sexual health and wellness. Avoid explicit or overly personal topics, focusing instead on general curiosity, product inquiries, and wellness tips. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Include questions in English, Hindi, and Hinglish to cater to different language preferences. For example, your output should be structured like this: 'What are the benefits of using sexual wellness products regularly? || महिलाओं के लिए यौन स्वास्थ्य को बेहतर बनाने के लिए कौन-कौन से उपाय हैं? || Sexual wellness products ke use ke fayde kya hain, aur inka koi side effect toh nahi?'"

// //     // Ask openAi for a streaming chat completion given the prompt
// //     const response = await openai.completions.create({
// //         model: 'gpt-3.5-turbo-instruct',
// //         max_tokens: 400,
// //         stream: true,
// //         prompt,
// //     });

// //     // Convert the response into a friendly text-stream
// //     const stream = OpenAIStream(response);
// //     // Respond with the stream
// //     return new StreamingTextResponse(stream);
// //     } catch(error){
// //        if(error instanceof OpenAI.APIError){
// //         const {name, status, headers, message} = error;
// //         return NextResponse.json({
// //             name, status, headers, message
// //         }, {status})
// //        } else{
// //         console.error("An unexpected error occurred", error )
// //         throw error
// //        }
// //     }
// // }


// // import OpenAI from "openai";

// // const openai = new OpenAI();

// // async function main() {
// //   const completion = await openai.completions.create({
// //     model: "gpt-3.5-turbo-instruct",
// //     prompt: "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask sexual product experts questions anonymously. The questions should be suitable for a diverse audience, promoting open and respectful discussions about sexual health and wellness. Avoid explicit or overly personal topics, focusing instead on general curiosity, product inquiries, and wellness tips. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Include questions in English, Hindi, and Hinglish to cater to different language preferences. For example, your output should be structured like this: 'What are the benefits of using sexual wellness products regularly? || महिलाओं के लिए यौन स्वास्थ्य को बेहतर बनाने के लिए कौन-कौन से उपाय हैं? || Sexual wellness products ke use ke fayde kya hain, aur inka koi side effect toh nahi?'",
// //     max_tokens: 30,
// //     temperature: 0,
// //   });

// //   console.log(completion);
// // }
// // main();


// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// // Initialize OpenAI instance
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(request: NextRequest) {
//   try {
//     // Call OpenAI API for the completion
//     const suggestions = await openai.completions.create({
//       model: "gpt-3.5-turbo-instruct",
//       prompt: `Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask sexual product experts questions anonymously. The questions should be suitable for a diverse audience, promoting open and respectful discussions about sexual health and wellness. Avoid explicit or overly personal topics, focusing instead on general curiosity, product inquiries, and wellness tips. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Include questions in English, Hindi, and Hinglish to cater to different language preferences. For example, your output should be structured like this: 'What are the benefits of using sexual wellness products regularly? || महिलाओं के लिए यौन स्वास्थ्य को बेहतर बनाने के लिए कौन-कौन से उपाय हैं? || Sexual wellness products ke use ke fayde kya hain, aur inka koi side effect toh nahi?'`,
//       max_tokens: 300,
//       temperature: 0,
//     });

//     // Return the completion as a JSON response
//     return NextResponse.json(suggestions);
//   } catch (error) {
//     console.error("Error occurred while processing OpenAI request:", error);
//     return NextResponse.json(
//       { error: "An error occurred while generating the completion." },
//       { status: 500 }
//     );
//   }
// }



// // // Make sure to include these imports:
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// // const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // const prompt = "Write a story about a magic backpack.";

// // const result = await model.generateContent(prompt);
// // console.log(result.response.text());








// import necessary dependencies
import OpenAI from "openai";
import { NextResponse } from "next/server";

// create an OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


// set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(request: Request) {
    try {
        const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous messaging platform called 'AnonyExpert', where users can ask questions anonymously. Include questions in English, Hindi, and Hinglish.";

        // Ask OpenAI for a completion given the prompt
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt,
            max_tokens: 400,
        });

        const text = response.choices[0]?.text?.trim() || "";
        const prompts = text.split("||").map((p) => p.trim());

        // Return suggestions as a JSON response
        return NextResponse.json({ prompts });
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            const { name, status, headers, message } = error;
            return NextResponse.json(
                { error: {name, status, headers, message} },
                { status }
            );
        } else {
            console.error("An unexpected error occurred", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
            );
        }
    }
}





