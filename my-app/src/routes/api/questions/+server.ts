import { openai } from '$lib/server/openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export async function POST({ request }) {
	const { prompt }: { prompt: string } = await request.json();

  
	const response = await openai.chat.completions.create({
		// model: 'gpt-3.5-turbo-1106',
		model: 'gpt-4-1106-preview',
    // response_format: { "type": "json_object" },
		stream: true,
    seed: 1,
		messages: [
			{
				role: 'system',
				content:
					'you are to provide help with programming in svelte 4.'	
				// 'You are to act as an assistant on a stem website for students. Answer any questions briefly, with a maximum of 4 sentences.'
			},
			{ role: 'user', content: prompt }
		],
		max_tokens: 1000
	});
  

	const stream = OpenAIStream(response);
	return new StreamingTextResponse(stream);
}
