import React, { useState } from 'react'

const input =
    "w-full rounded-lg border border-deep/20 bg-white px-4 py-3 text-deep placeholder:text-deep/40 " +
    "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 " +
    "read-only:cursor-not-allowed read-only:bg-mint/60"

const btn = "rounded-xl border-2 py-3 font-bold transition-colors "
const on = "border-brand bg-brand text-white"
const off = "border-deep/10 bg-mint/50 text-deep hover:border-brand"

const Donate = () => {
    const [selected, setSelected] = useState(0) // preset button ka amount
    const [custom, setCustom] = useState('')    // alag input ka amount

    // custom likha ho to wo, warna chuna hua button
    const amount = custom ? Number(custom) : selected
    const valid = amount >= 100

    const pick = (value) => {
        setSelected(value)
        setCustom('') // button dabane par custom input khali
    }

    const onCustom = (e) => {
        setCustom(e.target.value)
        setSelected(0) // custom likhne par buttons ka selection hat jaye
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({ campaign: 'Education Support', amount }) // backend ke baad payment yahan se
    }

    return (
        <div className="bg-cloud">
            <div className="bg-deep text-white">
                <div className="mx-auto max-w-3xl px-4 py-14 text-center">
                    <h1 className="text-3xl font-bold text-[#183D43] md:text-5xl">Donate & Help People</h1>
                    <p className="mt-3 text-lg text-gray-600">100% transparent and secure donation system</p>
                </div>
            </div>

            <div className="mx-auto max-w-xl px-4 py-12">
                <form
                    onSubmit={onSubmit}
                    className="grid gap-6 rounded-2xl border border-deep/10 bg-white p-6 shadow-sm md:p-8"
                >
                    <div>
                        <label htmlFor="campaign" className="mb-1.5 block text-sm font-semibold text-deep">
                            Campaign
                        </label>
                        <input id="campaign" name="campaign" type="text" readOnly value="Education Support" className={input} />
                    </div>

                    <div>
                        <span className="mb-1.5 block text-sm font-semibold text-deep">Choose amount (Rs.)</span>
                        <div role="group" aria-label="Choose amount" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            <button
                                type="button"
                                onClick={() => pick(500)}
                                className={`rounded-xl border-2 py-3 font-bold transition-colors ${selected === 500 ? "bg-blue-400 text-white border-blue-400" : "bg-white text-deep border-deep/10"
                                    }`}
                            >
                                500
                            </button>
                            <button type="button" onClick={() => pick(1000)} aria-pressed={selected === 1000}
                                className={`rounded-xl border-2 py-3 font-bold transition-colors ${selected === 1000 ? "bg-blue-400 text-white border-blue-400" : "bg-white text-deep border-deep/10"
                                    }`}>1,000</button>
                            <button type="button" onClick={() => pick(2000)} aria-pressed={selected === 2000}
                                className={`rounded-xl border-2 py-3 font-bold transition-colors ${selected === 2000 ? "bg-blue-400 text-white border-blue-400" : "bg-white text-deep border-deep/10"
                                    }`}>2,000</button>
                            <button type="button" onClick={() => pick(5000)} aria-pressed={selected === 5000}
                                className={`rounded-xl border-2 py-3 font-bold transition-colors ${selected === 5000 ? "bg-blue-400 text-white border-blue-400" : "bg-white text-deep border-deep/10"
                                    }`}>5,000</button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="amount" className="mb-1.5 block text-sm font-semibold text-deep">
                            Or enter a custom amount
                        </label>
                        <input
                            id="amount" name="amount" type="number" min="100"
                            placeholder="e.g. 3000" value={custom} onChange={onCustom}
                            className={input}
                        />
                    </div>

                    {/* Continue tabhi dikhe jab amount 100 ya zyada ho. Hatana ho to ye poora block delete karein. */}
                    {valid && (
                        <button
                            type="submit"
                            className="rounded-xl  bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-deep"
                        >
                            Continue to Payment
                        </button>
                    )}

                    {!valid && (
                        <p className="text-center text-sm text-deep/70">Select an amount or enter at least Rs. 100.</p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Donate