import React from 'react'

export const FAQ = () => {
    return (
        <div className="miscelaneous">
            <div className="page-header">
                <h1>FAQs</h1>
            </div>
                <ul id="faqs"className="list">
                    <li><strong>What is Wakanda?</strong></li>
                    <p>Home of Vibranium</p>
                    <li><strong>What is Vibranium?</strong></li>
                    <p>A resource in Wakanda</p>
                    <li><strong>How do I become a soldier of Wakanda?</strong></li>
                    <p>Fight to the death</p>
                    <li><strong>How do I fly an aircraft?</strong></li>
                    <p>Press start and hope you land safely</p>
                </ul>
        </div>
    )
}