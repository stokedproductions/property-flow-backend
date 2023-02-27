import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService) {}
    // TODO STORE THESE IN A DATABASE
    // For now we have them saved as environment variables.
    private apiKeys: string[] = this.configService.get<string>('API_KEYS').split(',');

    validateApiKey(apiKey: string) {
        return this.apiKeys.find(apiK => apiKey == apiK);
    }
}
