import React, { Component } from 'react'
import '../style/User.css'

class App extends Component {

  render() {



    return (
        <div className='userRoot'>
          <div class="main_site_body_container">
            <div class="your_block">
              <div class="avatar">
                <img src="https://i.pinimg.com/originals/a3/13/8d/a3138d75e764cdd799ad3901ef90b8e6.jpg" alt="" />
              </div>
            </div>
            <div class="wall">
              <div class="about_me">
                <div class="name_and_status">
                  <p class="name">Vasya Popovich</p>
                  <p class="status">Active</p>
                </div>
                <div class="private_inf">
                  <div class="my_date">
                    <div>
                      <aside>Країна:</aside>
                      <div>Україна</div>
                    </div>

                    <div>
                      <aside>Місто:</aside>
                      <div>Ужгород</div>
                    </div>

                    <div>
                      <aside>Мова:</aside>
                      <div>Українська</div>
                    </div>

                    <div>
                      <aside>День народження:</aside>
                      <div>19 жовтня 1997</div>
                    </div>

                  </div>
                <div class="my_rating">
                  <p>Рейтинг</p>
                  <p id="rating">0</p>
                </div>
              </div>
          </div>
              <div id="show_detail">
                <div>Показати детальну інформацію</div>
                </div>
          </div>
          </div>
            <div id="additional">
              <div class="my_music">
                  <div id="current_music" >
                    <div>
                      <p><span>5 </span>Аудіозаписи</p>
                    </div>
                    <div>
                      <p>Усі</p>
                    </div>
                  </div>

                <div class="list_music">
                  <div>
                    <div id="play_music"></div>
                    <div id="author_music">
                      Alan Walker -
                    </div>
                    <div class="name_music">
                      - Darkside (feat. Au/Ra and Tomine Harket)
                    </div>
                  </div>

                  <div>
                    <div id="play_music"></div>
                    <div id="author_music">
                      Alan Walker -
                    </div>
                    <div class="name_music">
                      - New Day (Official Video) [New Song 2018]
                    </div>
                  </div>

                  <div>
                    <div id="play_music"></div>
                    <div id="author_music">
                      Alan Walker -
                    </div>
                    <div class="name_music">
                      - The Spectre
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div class="records_or_all">
                  <p>Записи</p>
                  <p id="all">Всі</p>
              </div>
            </div>

    );
  }
}

export default App;
