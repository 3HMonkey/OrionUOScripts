/**
 * AttackNearestEnemyMobile.oajs
 * This script attacks the nearest mobile (monster)
 * Settings: Set it to a hotkey. Decide if you want to loop
 * it or not. Don't forget to set your friendlist (people you
 * do not want to attack)!
 * Special thanks to: screwy (OrionUO-forums)
 * @license GPL-3.0 , see <https://www.gnu.org/licenses/>
 * @version 0.1
 * @author  3HMonkey, see https://github.com/3HMonkey/
 * @link see https://github.com/3HMonkey/OrionUOScripts/
 * @updated 2018-07-25
 */
function AttackNearestEnemyMobile() {
    Orion.Ignore('self');
    var mobiles = Orion.FindType('!0x0190|!0x0191', '0xFFFF', ground, 'near|mobile|ignorefriends', '15', 'gray|red|criminal|enemy');
    if (!mobiles.length) {
        Orion.Print('-1', 'No mobile around!');
        Orion.IgnoreReset();
        return;
    }
    Orion.RemoveObject("target");
    Orion.AddObject("target", mobiles[0]);
    var target = Orion.FindObject("target");
    Orion.WaitTargetObject("target");
    Orion.Attack("target");

}