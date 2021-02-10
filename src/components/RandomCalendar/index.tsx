import React from 'react';

import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns'

import { Container } from './styles';

type HeatMapValue = { date: Date, count: number }

const RandomCalendar: React.FC = () => {
    const startDate = subYears(new Date(), 1);
    const endDate = new Date();

    const values: HeatMapValue[] = [];

    values.push({ date: new Date(), count: 3 });

    return (
        <Container>
            <div className="wrapper">
                <Heatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={values}
                    gutterSize={3.5}
                    classForValue={(item: HeatMapValue) => {
                        let clampedCount = 0;

                        if (item != null) {
                            clampedCount = Math.max(item.count, 0);
                            clampedCount = Math.min(item.count, 4);
                        }

                        return `scale=${clampedCount}`
                    }}

                    showWeekdayLabels
                />
            </div>

            <span>Random calendar (do not represent actual data)</span>
        </Container>
    )
}

export default RandomCalendar;