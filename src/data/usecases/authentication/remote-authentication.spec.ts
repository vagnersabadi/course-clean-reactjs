import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClient } from '../../protocols/http/http-client';


describe('RemoteAuthentication', () => {

  test('Should call httpPostClient with correct values', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url? : string
      post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }

    }

    const url = ''
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)

  })
});