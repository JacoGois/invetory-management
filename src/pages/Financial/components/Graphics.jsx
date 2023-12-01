import {
 Accordion,
 AccordionItem,
 AccordionButton,
 AccordionPanel,
 AccordionIcon,
 Box
} from '@chakra-ui/react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
import { BsGraphUp } from 'react-icons/bs';
import { formatCurrency } from '../../../utils/stringHelpers';

export const Graphics = () => {
 const generateChartData = () => {
  const categories = [];
  const seriesData = [];

  for (let i = 1; i <= 12; i++) {
    const date = new Date(); 
    date.setDate(date.getDate() + i);
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;

    categories.push(formattedDate);
    seriesData.push(Math.floor(Math.random() * 10000) + 1000);
  }

  return { categories, seriesData };
};



 const [chartOption, setchartOption] = useState(
  {
          
   series: [{
    name: "Faturamento Médio",
    data: generateChartData().seriesData,
  }],
   options: {
     chart: {
       type: 'area',
       height: 350,
       zoom: {
         enabled: false
       }
     },
     dataLabels: {
       enabled: false
     },
     stroke: {
       curve: 'straight'
     },
     
     title: {
       text: 'Faturamento Médio',
       align: 'left'
     },
     subtitle: {
       text: 'Último Ano',
       align: 'left'
     },
     xaxis: {
      type: 'datetime',
      categories: generateChartData().categories,
    },
     yaxis: {
       opposite: true
     },
     legend: {
       horizontalAlign: 'left'
     },
     tooltip: {
      formatter: function (val) {
        return formatCurrency(val);
      }
    }
   }})

  return (
   <Accordion className='bg-surface' allowMultiple>
     <AccordionItem>
       <h2>
         <AccordionButton>
           <Box as="span" flex='1' textAlign='left' className='flex items-center gap-2 font-bold opacity-90'>
             <BsGraphUp />  Gráfico
           </Box>
           <AccordionIcon />
         </AccordionButton>
       </h2>
       <AccordionPanel pb={4}>
         <Chart options={chartOption.options} series={chartOption.series} type="area" height={350} />
       </AccordionPanel>
     </AccordionItem>
   </Accordion>
  )
}