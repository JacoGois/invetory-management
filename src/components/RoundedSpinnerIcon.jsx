export const RoundedSpinnerIcon = ({ stroke = '#818181', strokeWidth = '7' }) => {
  return (
    <svg
      style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
      width='21px'
      height='21px'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        r='35'
        strokeDasharray='164.93361431346415 56.97787143782138'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='0.6711409395973155s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        ></animateTransform>
      </circle>
    </svg>
  )
}
