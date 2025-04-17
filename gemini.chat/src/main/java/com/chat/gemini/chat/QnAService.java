package com.chat.gemini.chat;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class QnAService {
    // access to api key and url[ Gemini]
    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;
    private final WebClient webClient;


    public QnAService(WebClient.Builder webClient) {
        this.webClient = WebClient.builder().build();
    }

    public String getAnswer(String question) {
        // construct the request payload
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[] {
                        Map.of(
                                "parts", new Object[] {
                                        Map.of("text", question)
                                }
                        )
                }
        );
        // {"content":[{"parts":[{"text":"question"}]}]}


        // make api call
        String resposne;
        resposne=webClient.post()
                .uri(geminiApiUrl+geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        // return response
        return resposne;
    }
}
