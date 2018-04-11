import {AbstractTaxStrategy} from './AbstractTaxStrategy';
import {BasicTaxStrategy} from './strategies/basicTaxStrategy';
import {FoodTaxStrategy} from './strategies/foodTaxStrategy';
import {MedicalTaxStrategy} from './strategies/medicalTaxStrategy';
import {BooksTaxStrategy} from './strategies/booksTaxStrategy';
import {environment} from '../../../../environments/environment';
/**
 * Created by lorenzo on 08/04/18.
 */

export class TaxStrategyFactory {

    private static instance: TaxStrategyFactory;

    static getInstance(): TaxStrategyFactory {
        if (!this.instance) {
            this.instance = new TaxStrategyFactory();
            return this.instance;
        } else {
            return this.instance;
        }
    }

    private constructor() {
    }

    getProductTaxStrategy(categoryCode: string): AbstractTaxStrategy {

        switch (categoryCode) {
            case environment.foodCode: {
                return new FoodTaxStrategy();
            }

            case environment.medicalCode: {
                return new MedicalTaxStrategy();
            }

            case environment.bookCode: {
                return new BooksTaxStrategy();
            }

            default: {
                return new BasicTaxStrategy();
            }

        }
    }
}
