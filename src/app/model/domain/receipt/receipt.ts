import {ReceiptLine} from './receiptLine';
import {Big} from 'big.js';
/**
 * Created by lorenzo on 09/04/18.
 */
export class Receipt {

    private _receiptLines: Array<ReceiptLine>;
    private _total: Big;
    private _totalTaxesPaid: Big;

    constructor() {
        this._receiptLines = new Array<ReceiptLine>();
        this._total = new Big(0);
        this._totalTaxesPaid = new Big(0);
    }

    addReceiptLine(receiptLine: ReceiptLine) {
        this.receiptLines.push(receiptLine);
        this.updateTotals(receiptLine);
    }

    private updateTotals(receiptLine: ReceiptLine) {
        this._total = this.total.add(receiptLine.total);
        this._totalTaxesPaid = this.totalTaxesPaid.add(receiptLine.getTaxesPaid());
    }

    // Getter
    get total(): Big {
        return this._total;
    }

    get totalTaxesPaid(): Big {
        return this._totalTaxesPaid;
    }

    get receiptLines(): Array<ReceiptLine> {
        return this._receiptLines;
    }


}