import React from "react";
import { useEffect } from "react";
import { ResponsiveLine } from '@nivo/line'
import { useGetAllBankroll } from './queries/helpers';
import { useUser } from "@clerk/clerk-react";

// const graphData = useEffect((props) => {
//   setSeries([{
//     id: "Bankroll",
//     data: props.data
//     .sort((r1,r2) => r1.timestamp - r2.timestamp)
//     .map(bankroll => {
//       return {
//       x: bankroll.timestamp,
//       y: bankroll.amount,
//     }
//   })}])
//     let yValues = props.data.map(d => d.value);
//     let minValue = yValues.reduce((v1, v2) => v1 > v2 ? v2 : v1);
//     let maxValue = yValues.reduce((v1, v2) => v1 > v2 ? v1 : v2);
//     setMinY(minValue - getStdDeviation(yValues));
//     setMaxY(maxValue + getStdDeviation(yValues));}, [props.data]);
  
const graphData = (bankrolls) => {
    return bankrolls.map(bankroll => {
    return { 
                x: new Date(bankroll.timeStamp).toLocaleString(),
                y: bankroll.amount,
            }
        })
};



const Graph = () => {
  const bankrollQuery = useGetAllBankroll();
  console.log(bankrollQuery);

    return (
        <ResponsiveLine
            data={[ {
                "id": "Bankroll",
                "color": "hsl(238, 70%, 50%)",
                "data": graphData(bankrollQuery.data || []) 
            }]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            xFormat= {(timeStamp) => {console.log(timeStamp);
            return new Date(timeStamp).toLocaleDateString();}} 
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Date',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Amount',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}
export default Graph;