import React from 'react'

type Props = {
    label: string
}

const Subtitle = ({ label }: Props) => <h2 className="h2">{label}</h2>

export default Subtitle
