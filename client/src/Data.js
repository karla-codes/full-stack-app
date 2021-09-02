export default class Data {
  // makes GET and POST requests to the REST API
  api(path, method, body = null, requiresAuth = false, credentials = null) {
    const url = 'http://localhost:5000/api' + path;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      // encodes username and password
      const encodedCredentials = btoa(
        `${credentials.emailAddress}:${credentials.password}`
      );

      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
  }

  // sends GET request to REST API and returns user - UserSignIn
  async getUser(emailAddress, password) {
    const response = await this.api('/users', 'GET', null, true, {
      emailAddress,
      password,
    });
    if (response.status === 200) {
      return response.json().then(data => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  // sends a POST request to REST API and creates new user - UserSignUp
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

  // sends GET request to REST API and returns list of courses - Courses
  async getCourses() {
    const response = await this.api('/courses', 'GET', null);
    if (response.status === 200) {
      return response.json().then(data => {
        return data.courses;
      });
    }
  }

  // sends POST request to REST API and creates new course - CreateCourse
  async createCourse() {}

  // sends GET request to REST API and returns individual course - CourseDetail
  async getCourse() {}
}
