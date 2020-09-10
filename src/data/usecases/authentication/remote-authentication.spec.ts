import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from './../../test/mock-http';


describe('RemoteAuthentication', () => {

  test('Should call httpPostClient with correct values', async () => {


    const url = ''
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)

  })
});