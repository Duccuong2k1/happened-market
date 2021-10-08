import React from 'react'
import Button from './Button'

const News = () => {
    return (
        <div className="news">
            <div className="container">
                <div className="news__header">
                    <h4>happened's issue</h4>
                    <p>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </p>
                    <Button>see more</Button>
                </div>
            </div>
        </div>
    )
}

export default News
