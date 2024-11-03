import React from 'react'
import Image from 'next/image'

import ScholossVollrads from './images/schloss-vollards.jpg'
import PierrePaillard from './images/pierre-paillard.jpeg'
import DomainSaintDamien from './images/domain-saint-damien-gigondas.webp'
import ChateauFieuzal from './images/chateau-fieuzal.webp'
import { useTranslations } from 'next-intl'

const WINES = [
  {
    name: 'Pierre Paillard, Bouzy Grand Cru Les Parcelles Extra Brut, 2018',
    image: PierrePaillard,
    tags: ['France', 'Champagne', 'Sparkling wine', 'Blend'],
    vivinoUrl:
      'https://www.vivino.com/HK/en/fr-champagne-pierre-paillard-bouzy-grand-cru-les-parcelles-extra-brut/w/5260267?srsltid=AfmBOoqG2_28vk47lx9ds05JiV6KWg0OwuBge3z5y25Omu1EcwzDLkuS',
  },
  {
    name: 'Schloss Vollrads, Riesling Sekt Brut, 2016',
    image: ScholossVollrads,
    tags: [
      'Germany',
      'Rheingau',
      'Schloss Vollrads',
      'Sparkling wine',
      'Riesling',
    ],
    vivinoUrl:
      'https://www.vivino.com/NL/en/schloss-vollrads-riesling-sekt-brut/w/7334455?year=2016&srsltid=AfmBOorW_6Ia0TQMY5ddfLcOyl4oe2wHpL4oJN2z_0LJJZhElfzU1Znh',
  },
  {
    name: 'Domaine Saint Damien Gigondas Vieilles Vignes, 2019',
    image: DomainSaintDamien,
    tags: [
      'France',
      'Rhone',
      'Domaine Saint Damien Gigondas Vieilles Vignes',
      'Red wine',
      'Blend',
    ],
    vivinoUrl:
      'https://www.vivino.com/NL/en/domaine-saint-damien-gigondas/w/1105552?year=2019',
  },
  {
    name: "Chateau Fieuzal L'Abeille de Fieuzal Blanc, 2020",
    image: ChateauFieuzal,
    tags: [
      'France',
      'Pessac Leognan',
      "L'Abeille de Fieuzal",
      'White wine',
      'Blend',
    ],
    vivinoUrl:
      'https://www.vivino.com/HK/en/chateau-de-fieuzal-l-abeille-de-fieuzal-pessac-leognan-blanc/w/94827',
  },
]

export default function List() {
  const t = useTranslations('Wines')

  return (
    <div
        className='container mt-120 mb-60'
        id="wine-list"
    >
      <div className="row mb-n30">
        {WINES.map((wine) => (
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30" key={wine.name}>
            <div className="services-3-item round text-center">
              <div className="wow fadeInUpShort" data-wow-offset={50}>
                <div className='mb-20'>
                  <Image
                    className="wine-image"
                    src={wine.image}
                    alt="Blog Image"
                    width={140}
                    height={140}
                  />
                </div>
                <h3 className="services-3-title">{wine.name}</h3>
                <div className="services-3-text">
                  {wine.tags.join(' | ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
