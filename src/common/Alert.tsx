import React from 'react';

type Props = { message: string }

export default function Alert({ message }: Props) {
    return <h2 className="t-center">{message}</h2>
}

