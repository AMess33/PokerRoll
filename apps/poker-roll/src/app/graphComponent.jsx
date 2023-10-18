import React from "react";
import { useEffect } from "react";
import { ResponsiveLine } from '@nivo/line'
import { useGetAllBankroll } from './queries/helpers';
import { useUser } from "@clerk/clerk-react";

  
const graphData = (bankrolls) => {
    return bankrolls.map(bankroll => {
    return { 
                x: new Date(bankroll.timeStamp),
                y: bankroll.amount,
            }
        })
};



const Graph = () => {
  const bankrollQuery = useGetAllBankroll();

    return (
        <div>
        <ResponsiveLine
            data={[ {
                "id": "Bankroll",
                "color": "hsl(238, 70%, 50%)",
                "data": graphData(bankrollQuery.data || []) 
            }]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'time', nice: true }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            xFormat= {(timeStamp) => {console.log(timeStamp);
            return new Date(timeStamp).toLocaleDateString();}} 
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 50,
                tickValues: 5,
                format: '%d %b',
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
        </div>
    )
}
export default Graph;