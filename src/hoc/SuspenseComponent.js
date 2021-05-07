import React, { Suspense } from 'react';

const SuspenseComponent = (Component) => {
    return (props) => {
        return (
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Component {...props} />
                </Suspense>

        )
    }
}
export default SuspenseComponent;