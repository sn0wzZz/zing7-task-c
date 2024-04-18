import Image from 'next/image'
import React from 'react'
import TruckImage from '../../../public/Image.png'
import Heading from '../ui/Heading'

export default function Features() {
  return (
    <article className='py-2 md:py-5 xl:py-10 mx-2'>
      <div>
        <Image src={TruckImage} alt='what awaits me...' />
      </div>

      <div className='p-2 xl:p-10'>
        <Heading>Решения</Heading>
        <p>
          Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме
          услуги за всички видове бизнес – от малки местни предприятия до
          мултинационални компании.
          <br />
          <br />
          Ние обработваме вашата пратка като всяка друга голяма товарна пратка –
          старателно и професионално.
          <br />
          • Решения за всички видове стоки (конвенционални, изискващи
          температурен режим, опасни товари)
          <br />
          • Превоз на стоки от и до Балканите и всички страни на ЕС, цели и
          частични товари;
          <br />
          • Взимане на стоки и доставки за от и в България;
          <br />
          • Съчетаване на дълги и къси дестинации за ефективно планиране и
          разходи;
          <br />
          • Регулярни групажни линии;
          <br />
          • Транспортни услуги до Турция и Близкия изток;
          <br />• Спазване на изискванията за качество и стандарти на клиентите
          и/или на техни специфични изисквания.
        </p>

        <Heading>Предимства</Heading>
        <p>
          Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме
          услуги за всички видове бизнес – от малки местни предприятия до
          мултинационални компании.
          <br />
          <br />
          Ние обработваме вашата пратка като всяка друга голяма товарна пратка –
          старателно и професионално.
        </p>
      </div>
    </article>
  )
}