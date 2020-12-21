var mysidebar = `

            <div class="sidebar-header">
                <h3>Raouf's AI Blog</h3>
                <img src="./imgs/Me.PNG" class="img-thumbnail" alt="no photo">
            </div>

            <ul class="list-unstyled components">
                <p class="text-left">ML R&D engineer graduated from Sorbonne University</p>

                <p class="text-center" >
                    
                    <!-- Twitter -->
                    <a class="btn btn-primary" style="background-color: #55acee" href="https://twitter.com/raouf_ks" role="button"
                      ><i class="fab fa-twitter"></i
                    ></a>

                    <!-- Linkedin -->
                    <a class="btn btn-primary" style="background-color: #0082ca" href="https://www.linkedin.com/in/raouf-keskes/" role="button"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <!-- Github -->
                    <a class="btn btn-primary" style="background-color: #28a745" href="https://github.com/raoufkeskes" role="button"
                      ><i class="fab fa-github"></i
                    ></a>

                    <!-- Medium -->
                    <a class="btn btn-primary" style="background-color: #d73a49" href="https://medium.com/@raoufkeskes" role="button"
                      ><i class="fab fa-medium"></i
                    ></a>
                </p>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Content</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Statistical Learning</a>
                        </li>
                        <li>
                            <a href="#">Machine Learning</a>
                        </li>
                        <li>
                            <a href="#">Deep Learning</a>
                        </li>
                        <li>
                            <a href="#">Reinforcement Learning</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

`
;
	

document.getElementById("sidebar").innerHTML = mysidebar;