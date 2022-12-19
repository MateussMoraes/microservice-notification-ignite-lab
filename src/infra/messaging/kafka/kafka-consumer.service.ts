import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

// ServerKafka => Consumer
// ClientKafka => Producer

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['promoted-caiman-12187-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cHJvbW90ZWQtY2FpbWFuLTEyMTg3JJKqKnopcAFy-GGr_szPxkY3LpdQEYiRZTQ',
          password:
            'jXA2t-bBSehTdj0YRHyn7z1rskKunq1j8fgQtnrSkMRd60g43KLEKsdT2LZgsw4fqock8A==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
