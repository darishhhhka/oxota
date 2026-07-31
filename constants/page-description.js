const {project_id: PID, name, title} = require("../package");

const defaultPage = {
  title:
    "Игра на деньги Охота - выиграй от 20 000 000 рублей уже сегодня, каждые 15 минут у вас есть шанс стать миллионером - уже в приложении Столото",
  description: `Игра Охота - игра на деньги с реальными шансами получить трофей в 20 000 000 рублей уже сегодня в приложении Столото`,
  og: {
    image: "/images/100lotoLogo.png",
    title: "Игра &laquo;Охота&raquo;. Главный трофей &ndash; от 20 000 000 рублей. Проверь свой инстинкт! ",
    description: `Участвуй в розыгрышах каждые 15 минут и выигрывай денежные призы. Узнать подробнее и купить билет}`,
  },
};

const phpOG = {
  og: {
    isPHP: true,
    title: "<?= $share->title ?>",
    description: "<?= $share->description ?>",
    canonical_url: "<?= $share->canonical_url ?>",
    fb_app_id: "",
    _image: "<?= $share->image ?>",
    image: {
      default: "<?= $share->image['fb'] ?>",
      vk: "<?= $share->image['vk'] ?>",
      tw: "<?= $share->image['tw'] ?>",
    },
  },
};

export {phpOG};

export default defaultPage;
