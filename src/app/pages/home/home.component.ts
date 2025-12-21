import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToProjects(): void {
    this.router.navigate(['/proyectos']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contacto']);
  }

  frameworks = [
    { name: 'Angular', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmzt92fKoihjzGyDBEJSx5qobebUvodvGhsB0j8RxqZgbeXglbaf5nia734ZAf2Jzd6OrFJaDgzyrRLQZGPSOdWEVps_G9bGH-nh5b5pDrgaDOhKj76781wn8HmNWpTrkyHkIr_uKtFp6UqzHcqWmg2oIPvN7YWr1LnNMxko2ORIedSzms4htjPj_OfRiYLpwTlWazjr668mEHtk_jWF35cUQrBPVRopXnhwshh3SVQz8Me1uznuUocPvy_Y9TneAT5MgyMm1RPCI' },
    { name: 'React', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmOeRTOgua9ZUxHKJ1o7MHzqLh4zWwjkXttOhw7CuQUSr0MPZmg8V4sLTSJvjQ4GFhatrf5mXlLFeL1D1P8GvLNYtuigRsKB5VYZhIDhIjR0zBSu4Co46vq9dHUrQ8SzDOlIcLrfPjdoG5TgvHOO7eSRMi8ka72UQighMykdl3JVm9xNI9bZ0UaQ-gfm3LKvuWLR0nG7-2v0w1lt1IgH2fdU2NJ57EWUTTNt_s33VWhtU9A_bxmm_NVHQ4-AzcHMf--3p_-VpoACw' },
    { name: 'Vue', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsGr2SSHYq3kc7BNT6Q4RRnO8rXgSQ-ZuVbJFzHZRx8vI5vJeYvfQ81DkuR66N3QIUkckp9D4pV-bhAb3mOwk9zum1YrZib_Uy4DAzZ5WEUt58bvzEHFI6oSn-vL0XfKFp5hWR3tHraVSjJKVYhXRQZFCZ4DlPBLpvVd1TPNbW6QK03gIY7UJ_JtRsIFpSyDa3JvDzowb8K4Qli3__3qWV200ZfL26Frv3r12zA11bLFe1H4vdrtN23X_zdqz0gU_afxTbW8jVapc' },
    { name: 'Flutter', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKWS8TcfpN-2oaFF87B0zVqwMfYCSMLmGqVcZMJqaTb_AMrsMHX2C9ha-4HUh0VbIQkQ44M5andGEJe3CCbziAYifLhl8CaComXo2Q-4O9dYAjDohRpKDv4bpIw5pNWbQnEmiX4Jw3c3MGN530c33EYuRfkmSn3_5tvq26YN_EnLrobUNglLDUq9yN6txHevTDyOP4-3ZoyHMnsNwIV5E2d1SVDbec7s8fjJy3IstE3ZYiHWXFr3_irVj7q24ovtyQtRFVdVmnpJM' },
    { name: 'NestJS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfNSdYBi8s49Uziy0lO2UxkM7z6sgvG6Vx_-cMb5RGNyhcXLFpGjvlXt6MjjopkUyf-swZ8uIoxYerLwWq7QRW4K2jq_TJvBoAvQ8sLJ8LwOuRgcn7cAlmAb70_breF90-cw4EHSU8HSv3Ve-d2zgJdYN-R6JrJFrEwsxlykICkLCo_YMShVQkKNdxotyYleGJCy6RDUWRhQjXaPRWWPyMotUQWBFBaBusarKnokYRsF0t9eeTDNCvBhSZiKR_EKnosJ3WrwYgLas' },
    { name: 'Next.js', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjttlsOSR3wT4XYA2lS_L8d1L6qpZkC3Ga9riazqLyirfgm8iuM0kKpCq7aMZuuOT9ZqgZbbhD0_ApD-wXulGoY0bFsR1yIXarfxbbvbGWnXXa-lkaPgQzkZYNoIYF4OXeArl5RLvEe1LiUNio_mgVRiuNqB3_T4Yg_YRqMxzHjtgUUisyoY0WH6_-5L6y7gE5tvABoFfn6ttnTgx8Q4gWA6fXKafBWQtfpuDAO05NzVLUbWYpq7pa8SzUuXkNx06VIb4uf5noPEA' },
    { name: 'Java STS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY74bZar6wl2tMrp3p2wUHv7kZyrlB-IH2Kcc7z3jyWZpX04wga08MAboAG0hb9sAeH5vYDcneUrpJWZUtI4CetAgNhtCDF70lZZvNn3o3eRXZMmgIipMM0QOw3z1oxx5UE_mGJl5fJdMC3lUaI2kvNStBh4GYicfdHGbr_52lC3KAvPlXjr60tMqZL7vmbbLVPeXEkBiUA_lmd-gujuQim0jjnFYdiqxBga8TSvW4RPNXOGL76KgoDKjyW8EJAYWzTOkI3zePz4c' }
  ];

  tools = [
    { name: 'GitHub', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf7w3fo72jttysxDCQwqVc_L-n6fi_4bLprOkKArAqFFdP1V2DkBa278eLZT2-1TY6YwOZg17OmMrtNKocthiCPH_4GfMgjuh6Zns0oPLdX4Nzht_Vp8mDdJj_mWvSly4UyD6m6AKHfxi6uCJPU3rgGxVUdNzRdEsd9RdI3xett3rChM94ogPWhg8_quSqYiKWzBFG8Xg3U4bi3IF0bq6GurEnYgE10BvAKenQGqB5on8akplgI8fIPrFv6SrYkZMcRB50pIhJ36U' },
    { name: 'GitLab', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN4609e9LCDI6lbcMA3B6FFTneE3R4Qg4syOxD-a-lRx4gCYE_dyoklzqhOv0t-4fPMAaJOjERiFSjY5GaS3rGp33MC3s_ZhFKNVSPA7eEfsMmMvnkwHlkDq4NHAP_txOyXuA0LtNzM6KvGnrK8nux5eXqJTATZB0NmJIBKoQKW0mMLa7AJG7--9C4lhhzcFkigmFGwBZmZmGhTyo1ti71BuennaRH8qtse02gfeU1kh7Cn-YKihvLOjPKbAxQtlSiyaeYyX0qhzs' },
    { name: 'Docker', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcidhG7vfh_7iovr_QGQ3JHgtrfOLM4dcSvR2rVUYOD157k4QtbQmTx22QpsejiN0oDhFe3UfqVevWcaU790D0Z9nrjQ5iIv3JodkjZQFpGaNjvR4P293uC6DQEN5zsfvEvjJZC2pQqgzD4V44-UndKuPfKn8Nq3IJjN0W3EPcXZAcT-c9vOdcFU3A8O2qCTuqdfVd44D1uvl8f-aHGjTlpjp14wuteo_zMw0C7jq2dBlENjNhP8fDW0l2MB2bsTAH0GqTgytxEng' },
    { name: 'Jenkins', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5I3179SjiGZJ_P-tkeyVuhZRQOtdGim0NHnVDQpv_CxMoXr26uFm2220xnqwJE1PHlWyFWfGL6kyttqoC8y0z9Xta6hQJpq4eUYPASeQohU8MKcXD5Jgw7nAhYKXqg2BqVhkjcQkF3VpodqL-0ntWAt-NHB4qzgwzFrh9LaNNLmkAn4250smSHMZEpKp0uNxwigFFZTJFWq_y-cOFgQNSSGeon77HoEgESa1M06Q3QsSexckI-03A-Sw9rotvvBBYvXbjqaQOL54' },
    { name: 'Azure', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4rb8p9jvxWu8AYDil06Ij0aD7eCH0oYNlGN24ic4AwC9sRij_BEYDaikIaCwrZwbnrAzxDSVmUupwGrJgjEQaJNGZ9HCnPpISFjB8_mun6kepYOWQkqIApQPQ-j0mDv7eWYngzZY2Ly1UZiztH-XIWCIAKH7KtxQSjV0ZLY3waXOfrNRZS_tgtICeta3vD0c-yOMrZbiYRsTZFgiVP7ZGSGwq8OAteBgFg62X7tDmFx3Yp5Y9MpaVIOdNZBiBaD105xeVXJih3jU' },
    { name: 'AWS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGbeBqFAU55r_lTQW_qWKe2BSixoJDLMAVhN4RqGgM1AqMzpJrpf59s6jwcRbLPN-CclCPAg0x9E60NdPkN5k5M7PHFfhaEmBunqJC3AtIUjdq7OEFPJxsNPJP0frTHZpf1CkivBlFvYqVdCMA4ydsQhLG9wRytJxc0yIsz40TatHpHNzm3dyUIDefm0DgRzz4mkVGdGOCgcLuI0LIw9cvOPFwDQd-aTiwrsxzLQltzna-Y7CeN8vK6daWtUa1caj8xScKEEgI1IE' }
  ];
}
