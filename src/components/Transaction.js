
const Transaction = ({narration, transactionId, amount}) => (
        <div className="transaction-wrapper">
            <div>
                <p className="narration">
                    <strong>{narration}</strong>
                </p>
                <p>{ transactionId}</p>

            </div>
            <div className="transaction-amount">
                <h4>NGN{amount}</h4>
            </div>
        </div>
    )


export default Transaction;