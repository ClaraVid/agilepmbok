$(window).on("load", () => {
    $(".js-open-modal[name='practicas-agiles']").each((index, currentElem) => {
        let arrId = [], salArrId = [];

        $("#prac-proc li[data-id='" + currentElem.dataset.pmboid + "']").each((index, childLi) => {
            arrId.push(childLi.dataset.proId);
        });

        arrId.forEach((id) => {
            $("p[data-proc-id='" + id + "']").last().clone().appendTo($(currentElem).find("td"));
        });

        arrId = [];

        $("." + currentElem.dataset.pmboid).each((index, childLi) => {
            salArrId.push(childLi.dataset.id);
        });

        salArrId.forEach((id) => {
            $("#sal-proc li[data-id='" + id + "']").each((index, childLi) => {
                arrId.push(childLi.dataset.proId);
            });
        });

        arrId.forEach((id) => {
            if (!$(currentElem).find("td p[data-proc-id='" + id + "']").length) {
                $("p[data-proc-id='" + id + "']").last().clone().appendTo($(currentElem).find("td"));
            }
        });
    });

    $("table").toggleClass("hidden");
});

$(document).ready(function () {
    $(".js-open-modal[name='practicas-agiles']").on("click", function () {
        var thisElementData = $(this).data("pmboid");
        $("#modal-practicas .modal-content").addClass("hidden");
        $("#prac_" + thisElementData).removeClass("hidden");

        $("#modal-practicas").modal();
    });
});
