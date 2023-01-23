import React from 'react';
import './App.css';
import FirstCard from './components/FirstCard/FirstCard';
import SecondCard from './components/SecondCard/SecondCard';
import ThirdCard from './components/ThirdCard/ThirdCard';

const posts = [
    {
        "id": 1,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
        "text": "Таким образом должна выглядеть структура проекта",
        "date": "2021-10-06",
        "lesson_num": 123,
        "title": "Структура проекта",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 7
    },
    {
        "id": 2,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
        "text": "Merging main into feature branch",
        "date": "2021-10-07",
        "lesson_num": 48,
        "title": "Merging main into feature branch",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 7
    },
    {
        "id": 3,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
        "text": "Hello! This is a really interesting cocktail! Really HOT! Try it, you won't regret it",
        "date": "2021-10-07",
        "lesson_num": 23,
        "title": "B-52!",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 97
    }
]

const title = posts.map((title) => title.title)
const text = posts.map((text) => text.title)
const date = posts.map((date) => date.date)
const image = posts.map((image) => image.image)

function App() {
  return (
    <div>
        <div className="App">
            <div>
                {posts.map(item =>(
                    <FirstCard
                        title={item.title}
                        text={item.text}
                        data={item.date}
                        image={item.image}
                    />
                ))}
            </div>
            <div>
                  {posts.map(item =>(
                      <SecondCard
                          title={item.title}
                          data={item.date}
                          image={item.image}
                      />
                  ))}
            </div>
            <div>
                  {posts.map(item =>(
                      <ThirdCard
                          title={item.title}
                          data={item.date}
                          image={item.image}
                      />
                  ))}
            </div>
        </div>
        <div className="posts">
            <div>
                <div>
                    <FirstCard
                        title={title[0]}
                        text={text[0]}
                        image={image[0]}
                        data={date[0]}
                    />
                </div>
                <div className="secondcard">
                      <div>
                          <SecondCard
                              title={title[1]}
                              data={date[1]}
                              image={image[1]}
                          />
                          <SecondCard
                              title={title[2]}
                              data={date[2]}
                              image={image[2]}
                          />
                      </div>
                      <div>
                          <SecondCard
                              title={title[0]}
                              data={date[0]}
                              image={image[0]}
                          />
                          <SecondCard
                              title={title[1]}
                              data={date[1]}
                              image={image[1]}
                          />
                      </div>
                </div>     
            </div>
            <div>
                    <div> 
                        {posts.map((post) =>(
                            <ThirdCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                            />
                        ))}
                        {posts.map((post) =>(
                            <ThirdCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                            />
                        ))}
                    </div>
            </div>
        </div>
    </div>
  );
}

export default App;
