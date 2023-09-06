import React from "react";

import { ResponsiveLine } from '@nivo/line'

const sampleData = [
  {
    "id": "July",
    "color": "hsl(14, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 131
      },
      {
        "x": "helicopter",
        "y": 277
      },
      {
        "x": "boat",
        "y": 204
      },
      {
        "x": "train",
        "y": 180
      },
      {
        "x": "subway",
        "y": 103
      },
      {
        "x": "bus",
        "y": 87
      },
      {
        "x": "car",
        "y": 61
      },
      {
        "x": "moto",
        "y": 54
      }
    ],
  },
  {
    "id": "france",
    "color": "hsl(109, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 232
      },
      {
        "x": "helicopter",
        "y": 168
      },
      {
        "x": "boat",
        "y": 28
      },
      {
        "x": "train",
        "y": 18
      },
      {
        "x": "subway",
        "y": 18
      },
      {
        "x": "bus",
        "y": 75
      },
      {
        "x": "car",
        "y": 41
      },
      {
        "x": "moto",
        "y": 283
      }
    ]
  }
]


const Graph = ({ data }) => {
    return (
        <ResponsiveLine
            data={sampleData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
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