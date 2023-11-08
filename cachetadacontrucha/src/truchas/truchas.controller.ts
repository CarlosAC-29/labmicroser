import { Controller, Get } from '@nestjs/common';

@Controller('truchas')
export class TruchasController {
    @Get()
    getTruchas(): any {
        return {
            "truchas": [
                'CacheteDeSancochoDeTrucha',
                'CacheteDeSancochoDeTruchaFrita',
                'CacheteDeSancochoDeHuerfana',
            ],
        };
    }
}
