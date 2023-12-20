import { Get, Route, Tags } from 'tsoa';
import { UNITS_OF_MEASUREMENT, UnitOfMeasurement } from '../enum/unit-of-measurement';


@Route('unit-of-measure')
@Tags('Unit of Measure')
export class UnitOfMeasureController {

    @Get('/')
    public async getAllUnitOfMeasures(): Promise<string[]> {
        return UNITS_OF_MEASUREMENT.slice();
    }
}
